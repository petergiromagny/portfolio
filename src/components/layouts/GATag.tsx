import { GoogleAnalytics } from "@next/third-parties/google"

export function GATag() {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

  if (!gaId) {
    console.warn("Google Analytics ID is not defined in environment variables")
    return null
  }

  return <GoogleAnalytics gaId={gaId} />
}
