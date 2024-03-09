'use client'

import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

export const Promotion = () => {
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 3) // Set the target date to 7 days from now

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date()
      const timeDifference = targetDate.getTime() - now.getTime()

      if (timeDifference > 0) {
        const seconds = Math.floor(timeDifference / 1000) % 60
        const minutes = Math.floor((timeDifference / 1000 / 60) % 60)
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24)
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

        setTime({ days, hours, minutes, seconds })
      } else {
        // If the target date has passed, set time to all zeros
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })

        // Clear the interval if the target date has passed
        clearInterval(intervalId)
      }
    }, 1000)

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Deals of the Month</h3>
        <p>
          Get ready for a shopping experience like never before with our Deals of the Month! Every
          purchase comes with exclusive perks and offers, making this month a celebration of savvy
          choices and amazing deals. Don't miss out! 🎁🛒
        </p>

        <ul className={classes.stats}>
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hour" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)
