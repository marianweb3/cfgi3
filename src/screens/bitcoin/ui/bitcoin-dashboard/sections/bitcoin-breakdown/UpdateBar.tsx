import { useEffect, useState } from 'react'

const UpdateBar = () => {
  const squares = new Array(10).fill(0)
  const [timeRemaining, setTimeRemaining] = useState('')
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date()
      const midnight = new Date()
      midnight.setHours(24, 0, 0, 0)
      const diff = midnight.getTime() - now.getTime()

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeRemaining(`${hours} hours, ${minutes} mins, ${seconds} secs`)

      const totalMinutesInDay = 24 * 60
      const minutesPassed = totalMinutesInDay - (hours * 60 + minutes)
      const percentageRemaining= (minutesPassed / totalMinutesInDay) * 100


      setWidth(Math.floor(percentageRemaining))
    }

    calculateTimeRemaining()
    const interval = setInterval(calculateTimeRemaining, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="relative w-full h-[55px] bg-[#1C1C1C] rounded-full overflow-hidden">
        <div
          className="relative flex h-full bg-[#D4B42A] overflow-hidden gap-4"
          style={{ width: `${width}%` }}
        >
          {squares.map((_, index) => (
            <svg
              key={index}
              width="61"
              height="55"
              viewBox="0 0 61 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
              style={{
                left: `${index * 30}%`,
              }}
            >
              <rect
                opacity="0.4"
                width="78.0098"
                height="158.744"
                transform="matrix(-0.00893179 -0.99996 0.406116 0.913822 -3.59619 -6.06342)"
                fill="#FFD72C"
              />
            </svg>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-work-sans text-[14px] leading-[19.6px] -tracking-wider font-medium">
          Updating in {timeRemaining}.
        </span>
      </div>
    </div>
  )
}

export default UpdateBar
