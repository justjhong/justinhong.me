import React, { useEffect, useState, useRef } from "react"
import styled from "@emotion/styled"
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../utils/firebase"
import colors from "styles/colors"

const HeatmapContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2em;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 1em;

  /* Hide scrollbar for cleaner look */
  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.grey300};
    border-radius: 2px;
  }
`

const HeatmapTitle = styled("div")`
  font-size: 0.8em;
  color: ${colors.grey700};
  margin-bottom: 0.5em;
  font-weight: 500;
  align-self: center;
`

const GraphContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const MonthLabels = styled("div")`
  display: flex;
  height: 15px;
  position: relative;
  width: 100%;
`

const MonthLabel = styled("div")`
  position: absolute;
  font-size: 10px;
  color: ${colors.grey700};
  left: ${props => props.offset}px;
`

const HeatmapGrid = styled("div")`
  display: grid;
  grid-template-rows: repeat(7, 10px);
  grid-auto-flow: column;
  gap: 3px;
`

const DayCell = styled("div")`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: ${props => props.color};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="6"
    height="6"
    fill="white"
    style={{ opacity: 0.7 }}
  >
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
  </svg>
)

const Tooltip = styled("div")`
  position: absolute;
  background: ${colors.grey800};
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  pointer-events: none;
  z-index: 100;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);

  &::after {
    content: '';
    position: absolute;
    border-width: 5px;
    border-style: solid;

    ${props => props.position === 'left' ? `
      top: 50%;
      left: 100%;
      margin-top: -5px;
      border-color: transparent transparent transparent ${colors.grey800};
    ` : `
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-color: ${colors.grey800} transparent transparent transparent;
    `}
  }

  @media (max-width: 767px) {
    position: fixed;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
    pointer-events: auto;
    padding: 12px 16px;
    font-size: 14px;

    &::after {
      display: none;
    }
  }
`

const MobileOverlay = styled("div")`
  display: none;

  @media (max-width: 767px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 99;
  }
`

const CrosswordHeatmap = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [minTime, setMinTime] = useState(Infinity)
  const [maxTime, setMaxTime] = useState(0)
  const [error, setError] = useState(null)
  const [hoveredDay, setHoveredDay] = useState(null)
  const [scale, setScale] = useState(1)
  const graphRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      // Fixed width of the heatmap is approx 720px (52 weeks * 13px + labels)
      const contentWidth = 720
      const availableWidth = window.innerWidth - 40 // 20px padding on each side

      if (availableWidth < contentWidth) {
        setScale(availableWidth / contentWidth)
      } else {
        setScale(1)
      }
    }

    handleResize()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (!db) {
        console.log("Firebase DB not initialized")
        setLoading(false)
        return
      }

      try {
        const today = new Date()
        // Fetch a bit more than a year to be safe
        const pastDate = new Date()
        pastDate.setDate(today.getDate() - 400)

        const startDateStr = pastDate.toISOString().split('T')[0]
        console.log("Fetching crossword data from:", startDateStr)

        const q = query(
          collection(db, "completion_times"),
          where("date", ">=", startDateStr)
        )

        const querySnapshot = await getDocs(q)
        console.log("Fetched docs count:", querySnapshot.size)

        const newData = {}
        let min = Infinity
        let max = 0

        querySnapshot.forEach((doc) => {
          const docData = doc.data()
          const time = docData.completionTime
          const status = docData.status || (time ? 'completed' : 'not_completed')

          if (time) {
            newData[docData.date] = {
              time,
              status
            }
            if (time < min) min = time
            if (time > max) max = time
          }
        })

        setData(newData)
        setMinTime(min)
        setMaxTime(max)
      } catch (error) {
        console.error("Error fetching crossword data:", error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>Loading heatmap...</div>
  if (error) return <div>Error loading heatmap: {error}</div>
  if (!db) return <div>Firebase not configured</div>

  // If no data, still render the empty grid
  // if (Object.keys(data).length === 0) {
  //   return <div>No crossword data found</div>
  // }

  // Dynamic 12-month range: from the start of (current month - 11) to end of current month
  const today = new Date()
  const thisYear = today.getFullYear()
  const thisMonth = today.getMonth()

  // Start month is 11 months ago (to show 12 months including current)
  const startMonthFirst = new Date(thisYear, thisMonth - 11, 1)

  // End month is the last day of the current month
  const endMonthLast = new Date(thisYear, thisMonth + 1, 0)

  // Align to week boundaries: find Sunday on or after start month's first day
  // This ensures we don't show any days from the previous month
  const startDayOfWeek = startMonthFirst.getDay()
  const startDate = new Date(startMonthFirst)
  if (startDayOfWeek !== 0) {
    startDate.setDate(startMonthFirst.getDate() + (7 - startDayOfWeek))
  }

  // Find Saturday on or after end month's last day
  const endDayOfWeek = endMonthLast.getDay()
  const endDate = new Date(endMonthLast)
  endDate.setDate(endMonthLast.getDate() + (6 - endDayOfWeek))

  // Generate days
  const days = []
  const currentDate = new Date(startDate)
  while (currentDate <= endDate) {
    days.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }

  // Generate month labels
  const months = []
  let currentMonth = -1
  let lastLabelRight = -50 // Initialize to ensure first label can be placed
  const numWeeks = Math.ceil(days.length / 7)

  // We iterate by week to place labels
  for (let i = 0; i < numWeeks; i++) {
    const weekStartDate = new Date(startDate)
    weekStartDate.setDate(startDate.getDate() + (i * 7))
    const month = weekStartDate.getMonth()
    const offset = i * 13 // 10px width + 3px gap

    if (month !== currentMonth) {
      // Only add label if there's enough space
      // Assuming approx 25px width for label + 10px padding
      if (offset > lastLabelRight + 10) {
        months.push({
          name: weekStartDate.toLocaleString('default', { month: 'short' }),
          offset: offset
        })
        lastLabelRight = offset + 25 // Update right edge
        currentMonth = month
      }
    }
  }

  const getGithubColor = (time) => {
    if (!time) return colors.grey300 // Darker grey for empty cells

    const range = maxTime - minTime || 1
    const score = 1 - ((time - minTime) / range)

    if (score > 0.8) return colors.green600
    if (score > 0.6) return colors.green500
    if (score > 0.4) return colors.green400
    if (score > 0.2) return colors.green300
    return colors.green200 // Darkest "light" green
  }

  const formatTime = (seconds) => {
    if (!seconds) return ""
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const isMobile = () => window.innerWidth < 768

  const handleMouseEnter = (e, dateStr, time, status) => {
    // On mobile, use click instead of hover
    if (isMobile()) return

    showTooltip(e, dateStr, time, status)
  }

  const handleClick = (e, dateStr, time, status) => {
    // On desktop, hover handles it; on mobile, use click
    if (!isMobile()) return

    e.stopPropagation()
    showTooltip(e, dateStr, time, status)
  }

  const showTooltip = (e, dateStr, time, status) => {
    const rect = e.target.getBoundingClientRect()
    const containerRect = e.target.closest('.heatmap-container').getBoundingClientRect()
    const date = new Date(dateStr)
    const dayIndex = date.getDay() // 0-6

    // Bottom 2 rows (Fri 4, Sat 5) -> Show Above
    // Others -> Show Left
    const showAbove = dayIndex >= 4 && dayIndex <= 5

    let x, y

    if (showAbove) {
      x = rect.left - containerRect.left + 5 // Center horizontally
      y = rect.top - containerRect.top - 10 // Above
    } else {
      x = rect.left - containerRect.left - 8 // Left
      y = rect.top - containerRect.top + (rect.height / 2) // Center vertically
    }

    setHoveredDay({
      dateStr,
      time,
      status,
      x,
      y,
      position: showAbove ? 'above' : 'left'
    })
  }

  const handleDismissTooltip = () => {
    setHoveredDay(null)
  }

  return (
    <HeatmapContainer className="heatmap-container" style={{ position: 'relative', alignItems: 'center', overflow: 'hidden' }}>
      <HeatmapTitle>My NYT Crossword Activity</HeatmapTitle>
      <div ref={graphRef} style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
        marginBottom: scale < 1 ? `-${(1 - scale) * 120}px` : '0' // Compensate for scale height reduction
      }}>
        <GraphContainer>
          <MonthLabels>
            {months.map((month, i) => (
              <MonthLabel key={i} offset={month.offset}>
                {month.name}
              </MonthLabel>
            ))}
          </MonthLabels>
          <HeatmapGrid>
            {days.map((date) => {
              const dateStr = date.toISOString().split('T')[0]
              const dayData = data[dateStr]
              const time = dayData?.time
              const status = dayData?.status
              const isCompletedNoHints = status === 'completed'

              return (
                <DayCell
                  key={dateStr}
                  color={getGithubColor(time)}
                  onMouseEnter={(e) => handleMouseEnter(e, dateStr, time, status)}
                  onMouseLeave={() => setHoveredDay(null)}
                  onClick={(e) => handleClick(e, dateStr, time, status)}
                >
                  {isCompletedNoHints && <StarIcon />}
                </DayCell>
              )
            })}
          </HeatmapGrid>
        </GraphContainer>
      </div>

      {hoveredDay && (
        <>
          <MobileOverlay onClick={handleDismissTooltip} />
          <Tooltip
            position={hoveredDay.position}
            style={{
              left: hoveredDay.x,
              top: hoveredDay.y,
              transform: hoveredDay.position === 'left'
                ? 'translate(-100%, -50%)'
                : 'translate(-50%, -100%)'
            }}
          >
            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
              {new Date(hoveredDay.dateStr).toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
            </div>
            {hoveredDay.time ? (
              <>
                <div>Time: {formatTime(hoveredDay.time)}</div>
                <div style={{ fontSize: '0.9em', opacity: 0.8 }}>
                  {hoveredDay.status === 'completed' ? 'Solved without hints!' : 'Solved'}
                </div>
              </>
            ) : (
              <div>No puzzle solved</div>
            )}
          </Tooltip>
        </>
      )}
    </HeatmapContainer>
  )
}

export default CrosswordHeatmap
