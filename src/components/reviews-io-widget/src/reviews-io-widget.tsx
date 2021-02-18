import { useState, useEffect } from 'react'
import { styled, CSS } from '@theme'
export type ReviewsIoWidgetProps = {
  css?: CSS
  starColor?: string
  numReviews?: number
}

export const ReviewsIoWidget: React.FC<ReviewsIoWidgetProps> = ({
  starColor = '#FE9339',
  numReviews = 20,
  ...props
}) => {
  const ReviewContainer = styled('div', { backgroundColor: '$white', py: '$4' })

  const ReviewWidgetMeta = `richSnippetReviewsWidgets("carousel-widget", { store: "https-www.aomail.com.au", primaryClr: "${starColor}", neutralClr: "#dbdcdd", reviewTextClr: "#32334A", widgetName: "carousel", layout: "fullWidth", numReviews: ${numReviews}, contentMode: "company;third-party", hideDates: false,})`

  const [widgetScript, setWidgetScript] = useState(null)
  useEffect(() => {
    const widgetScript = document.createElement('script')
    widgetScript.innerHTML = ReviewWidgetMeta
    widgetScript.async = true
    document.body.appendChild(widgetScript)
    return () => {
      document.body.removeChild(widgetScript)
    }
  }, [])
  return <div id="carousel-widget"></div>
}
