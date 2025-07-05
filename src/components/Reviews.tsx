import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false)

  const reviewers = [
    {
      name: "Emmanuella",
      image: "",
      review: "I loved it! It is very addictive!",
    },
    {
      name: "Peace",
      image: "",
      review: "I got 500g for a friend and he loved it! It finished in 2 days!",
    },
    {
      name: "Brown",
      image: "",
      review: "I love the chin chin! Especially the quality!",
    },
    {
      name: "Blessing P.",
      image: "",
      review: "I enjoyed it to the fullest!",
    },
    {
      name: "Chinyere",
      image: "",
      review: "It's really nice 😍",
    },
    {
      name: "Emmanuella",
      image: "",
      review: "I loved it! It is very addictive!",
    },
    {
      name: "Peace",
      image: "",
      review: "I got 500g for a friend and he loved it! It finished in 2 days!",
    },
    {
      name: "Brown",
      image: "",
      review: "I love the chin chin! Especially the quality!",
    },
    {
      name: "Blessing P.",
      image: "",
      review: "I enjoyed it to the fullest!",
    },
    {
      name: "Chinyere",
      image: "",
      review: "It's really nice 😍",
    },
    {
      name: "Emmanuella",
      image: "",
      review: "I loved it! It is very addictive!",
    },
    {
      name: "Peace",
      image: "",
      review: "I got 500g for a friend and he loved it! It finished in 2 days!",
    },
    {
      name: "Brown",
      image: "",
      review: "I love the chin chin! Especially the quality!",
    },
    {
      name: "Blessing P.",
      image: "",
      review: "I enjoyed it to the fullest!",
    },
    {
      name: "Chinyere",
      image: "",
      review: "It's really nice 😍",
    },
  ]

  // Split reviewers into 3 lines
  const line1 = reviewers.slice(0, 5)
  const line2 = reviewers.slice(5, 10)
  const line3 = reviewers.slice(10)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("reviewers")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const ScrollingLine = ({
    reviewersArray,
    direction = "left",
    speed = "30s",
  }: {
    reviewersArray: typeof reviewers
    direction?: "left" | "right"
    speed?: string
  }) => {
    const [isPaused, setIsPaused] = useState(false)
    return (
      <div
        onMouseOver={() => setIsPaused(true)}
        onMouseOut={() => setIsPaused(false)}
        className="overflow-hidden py-2"
      >
        <div
          className={`flex items-stretch animate-scroll-${direction}`}
          style={{
            animationDuration: speed,
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {/* Duplicate the content for seamless loop */}
          {[
            ...reviewersArray,
            ...reviewersArray,
            ...reviewersArray,
            ...reviewersArray,
            ...reviewersArray,
            ...reviewersArray,
            ...reviewersArray,
            ...reviewersArray,
          ].map((reviewer, index) => (
            <ReviewBadge
              key={index}
              name={reviewer.name}
              image={reviewer.image}
              review={reviewer.review}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <section
      id="reviewers"
      className="py-20 bg-muted/30 overflow-hidden relative"
    >
      <div className="mx-auto px-6">
        <div className="text-center animate-fade-in-up  space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-flatfish-brown-dark">
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-flatfish-yellow-warm rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Every bite tells a story. Here are a few from our satisfied
            customers.
          </p>
        </div>

        <div
          className={`space-y-4 ${
            isVisible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          <ScrollingLine reviewersArray={line1} direction="left" speed="10s" />
          <ScrollingLine reviewersArray={line2} direction="right" speed="5s" />
          <ScrollingLine reviewersArray={line3} direction="left" speed="15s" />
        </div>
      </div>
    </section>
  )
}

export default Reviews

interface ReviewBadgeProps {
  name: string
  image?: string
  review: string
  rating?: number
}

const ReviewBadge = ({ name, image, review, rating = 5 }: ReviewBadgeProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <Badge
      variant="secondary"
      className="flex justify-start gap-2 px-3 py-2 bg-white border border-gray-200 shadow-sm hover:shadow-md mx-2 text-sm font-medium rounded-lg border-flatfish-brown-dark/20 bg-flatfish-yellow-warm/10 text-flatfish-brown-dark hover:bg-flatfish-cream/20 transition-colors   min-w-[15rem] max-h-[70px]"
    >
      <Avatar className="w-6 h-6 flex-shrink-0 border border-flatfish-brown-dark">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback className="text-xs bg-flatfish-yellow text-flatfish-brown">
          {initials}
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col items-start gap-1">
        <p className="text-xs font-medium text-flatfish-brown">{name}</p>
        <q className="text-xs text-gray-600">{review}</q>
      </div>
    </Badge>
  )
}
