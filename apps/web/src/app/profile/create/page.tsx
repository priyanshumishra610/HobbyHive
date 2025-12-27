import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * Create Profile Page - Onboarding flow
 */
export default function CreateProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link href="/dashboard" className="text-2xl font-bold">
            🐝 HobbyHive
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Create Your Profile</h1>
          <p className="text-muted-foreground">
            Let's set up your profile to start matching with other learners
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Step 1: Basic Information</CardTitle>
            <CardDescription>Tell us about yourself</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">City</label>
              <input
                type="text"
                placeholder="Enter your city"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Bio</label>
              <textarea
                placeholder="Tell others about yourself"
                className="w-full px-3 py-2 border rounded-md min-h-[100px]"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Step 2: Skills You Can Teach</CardTitle>
            <CardDescription>What skills are you comfortable teaching?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Add at least one skill you can teach
              </p>
              <Button variant="outline">Add Skill</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Step 3: Skills You Want To Learn</CardTitle>
            <CardDescription>What skills would you like to learn?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Add at least one skill you want to learn
              </p>
              <Button variant="outline">Add Skill</Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 flex gap-4 justify-end">
          <Link href="/dashboard">
            <Button variant="outline">Skip for Now</Button>
          </Link>
          <Button>Complete Profile</Button>
        </div>
      </main>
    </div>
  )
}

