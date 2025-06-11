"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy, Users, Code, Volume2, Gamepad2, Star, Download, ExternalLink } from "lucide-react"

export default function PostalGameWebsite() {
  const [activeTab, setActiveTab] = useState("overview")

  const teamMembers = [
    {
      name: "tomexo",
      role: "Game Coder",
      icon: Code,
      description: "Lead developer bringing the chaos to life with code",
      avatar: "T",
    },
    {
      name: "danykas",
      role: "3D Modeling",
      icon: Users,
      description: "Creating the twisted characters and environments",
      avatar: "D",
    },
    {
      name: "aszazza",
      role: "Sound FX",
      icon: Volume2,
      description: "Crafting the audio mayhem and atmosphere",
      avatar: "A",
    },
    {
      name: "axqzme",
      role: "Sound FX",
      icon: Volume2,
      description: "Additional sound design and audio engineering",
      avatar: "X",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-black to-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-red-800/30 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Gamepad2 className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold">POSTAL 2: THE BADDIES</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => setActiveTab("overview")}
                className={`hover:text-red-400 transition-colors ${activeTab === "overview" ? "text-red-400" : ""}`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("team")}
                className={`hover:text-red-400 transition-colors ${activeTab === "team" ? "text-red-400" : ""}`}
              >
                Team
              </button>
              <button
                onClick={() => setActiveTab("challenge")}
                className={`hover:text-red-400 transition-colors ${activeTab === "challenge" ? "text-red-400" : ""}`}
              >
                Challenge
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700 text-white">🎮 GAME DEVELOPMENT CHALLENGE</Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              THE BADDIES
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A twisted sub-game inspired by Postal 2, where chaos meets creativity. Four developers compete for the
              ultimate prize - a legendary Postal Dude plushie!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Download className="mr-2 h-5 w-5" />
              Play Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Trailer
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {activeTab === "overview" && (
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-black/50 border-red-800/30">
                <CardHeader>
                  <CardTitle className="text-red-400 flex items-center gap-2">
                    <Gamepad2 className="h-5 w-5" />
                    Game Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold">Chaotic Gameplay</h4>
                      <p className="text-gray-400">Experience the mayhem with unique baddie characters</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold">Custom 3D Models</h4>
                      <p className="text-gray-400">Hand-crafted characters and environments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-1" />
                    <div>
                      <h4 className="font-semibold">Immersive Audio</h4>
                      <p className="text-gray-400">Professional sound effects and atmosphere</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-red-800/30">
                <CardHeader>
                  <CardTitle className="text-red-400 flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    The Ultimate Prize
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Trophy className="h-16 w-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Postal Dude Plushie</h3>
                    <p className="text-gray-400">
                      The legendary collectible that every Postal fan dreams of owning. Only the winning team will claim
                      this ultimate prize!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "team" && (
            <div>
              <h3 className="text-3xl font-bold text-center mb-12 text-red-400">Meet The Team</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="bg-black/50 border-red-800/30 hover:border-red-600/50 transition-colors">
                    <CardHeader className="text-center">
                      <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-red-500">
                        <AvatarFallback className="bg-red-600 text-white text-xl font-bold">
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-red-400">{member.name}</CardTitle>
                      <CardDescription className="flex items-center justify-center gap-2 text-gray-300">
                        <member.icon className="h-4 w-4" />
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-sm text-center">{member.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "challenge" && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-center mb-12 text-red-400">The Challenge</h3>
              <Card className="bg-black/50 border-red-800/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-400">Development Competition</CardTitle>
                  <CardDescription className="text-lg text-gray-300">
                    We created the game not just for winning but for fun
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-red-400">Challenge Rules</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        Create a sub-game inspired by Postal featuring "The Baddies"
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        Each team member contributes their specialized skills
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        Winner takes home the coveted Postal Dude plushie
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        Game must capture the chaotic spirit of the original
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-red-400">Development Timeline</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-green-600">✓ Complete</Badge>
                        <span>Team Formation & Planning</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-yellow-600">⚡ In Progress</Badge>
                        <span>Core Development Phase</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-gray-600">⏳ Upcoming</Badge>
                        <span>Testing & Polish</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-gray-600">⏳ Upcoming</Badge>
                        <span>Final Submission & Judging</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-800/30 bg-black/50 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2024 Postal : Tomexo, Danykass, Axqzme, Aszazza. All rights reserved.</p>
          <p className="text-sm text-gray-500">
            This is a fan-made project and is not or maybe kind of affiliated with Running With Scissors idfk.
          </p>
        </div>
      </footer>
    </div>
  )
}
