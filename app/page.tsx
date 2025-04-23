import Image from "next/image"
import { Github, Linkedin, Instagram, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20" />
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Harish&nbsp;Annadurai</span>
              </h2>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                Data Engineer | Power Platform Expert | Python Enthusiast
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Transforming data into insights and automating business processes for maximum efficiency.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <a href="#contact" className="flex items-center gap-2">
                    <Mail size={18} /> Contact Me
                  </a>
                </Button>
                <Button variant="outline">
                  <a href="#projects" className="flex items-center gap-2">
                    View Projects
                  </a>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <Image
                  src="/placeholder.png?height=320&width=320"
                  alt="Harish"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="text-gray-500 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I'm a passionate <strong>Data Engineer</strong> with strong expertise in building scalable data
                solutions and automation workflows. With a deep understanding of both <strong>code and cloud</strong>, I
                turn data into actionable insights and automate business processes for maximum efficiency.
              </p>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Education</h3>
                <Card>
                  <CardHeader>
                    <CardTitle>P.S.V College of Engineering and Technology</CardTitle>
                    <CardDescription>B.Tech, 2023</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Graduated with 8.4 CGPA</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">My Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Data Engineering</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400">PySpark, Databricks, Azure Data Factory</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Data Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Python, Pandas, NumPy, Matplotlib, Seaborn
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">SQL Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400">MS SQL Server, Database Design</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Power Platform</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Power Apps, Power Automate, Business Process Automation
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: "Python", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
              { name: "Pandas", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200" },
              { name: "NumPy", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200" },
              { name: "Matplotlib", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
              { name: "Seaborn", color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200" },
              { name: "Power Apps", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
              { name: "Power Automate", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
              { name: "MS SQL", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
              { name: "PySpark", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
              { name: "Databricks", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
              { name: "Azure", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
              { name: "Azure Data Factory", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
              { name: "Data Analysis", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
              {
                name: "Data Visualization",
                color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
              },
              {
                name: "Business Intelligence",
                color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
              },
            ].map((skill, index) => (
              <div key={index} className={`p-4 rounded-lg ${skill.color} flex items-center justify-center`}>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Featured Projects</h2>

          <Tabs defaultValue="python" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="python">Python Projects</TabsTrigger>
              <TabsTrigger value="power-apps">Power Apps</TabsTrigger>
              <TabsTrigger value="power-automate">Power Automate</TabsTrigger>
            </TabsList>

            <TabsContent value="python" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Sales Data Analysis Dashboard"
                  description="Built an interactive dashboard using Python, Pandas, and Matplotlib to analyze sales data and provide actionable insights."
                  tags={["Python", "Pandas", "Matplotlib", "Data Analysis"]}
                  image="/placeholder.svg?height=200&width=400"
                />
                <ProjectCard
                  title="Customer Segmentation Analysis"
                  description="Used K-means clustering to segment customers based on purchasing behavior, helping marketing teams target specific customer groups."
                  tags={["Python", "Scikit-learn", "Pandas", "Seaborn"]}
                  image="/placeholder.svg?height=200&width=400"
                />
                <ProjectCard
                  title="Predictive Maintenance Model"
                  description="Developed a machine learning model to predict equipment failures before they occur, reducing downtime and maintenance costs."
                  tags={["Python", "PySpark", "Machine Learning", "Time Series"]}
                  image="/placeholder.svg?height=200&width=400"
                />
              </div>
            </TabsContent>

            <TabsContent value="power-apps" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Inventory Management App"
                  description="Created a Power App for real-time inventory tracking, barcode scanning, and automated reordering processes."
                  tags={["Power Apps", "SharePoint", "Power Automate"]}
                  image="/placeholder.svg?height=200&width=400"
                />
                <ProjectCard
                  title="Employee Onboarding Portal"
                  description="Developed a comprehensive onboarding solution that streamlines the process for HR and new employees."
                  tags={["Power Apps", "Power Automate", "SharePoint"]}
                  image="/placeholder.svg?height=200&width=400"
                />
                <ProjectCard
                  title="Field Service Management App"
                  description="Built a mobile-friendly app for field technicians to manage work orders, capture signatures, and track time."
                  tags={["Power Apps", "Dataverse", "Power BI"]}
                  image="/placeholder.svg?height=200&width=400"
                />
              </div>
            </TabsContent>

            <TabsContent value="power-automate" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Document Approval Workflow"
                  description="Automated the document approval process with notifications, reminders, and status tracking."
                  tags={["Power Automate", "SharePoint", "Microsoft Teams"]}
                  image="/placeholder.svg?height=200&width=400"
                />
                <ProjectCard
                  title="Data Integration Pipeline"
                  description="Created an automated flow to extract, transform, and load data between multiple systems on a scheduled basis."
                  tags={["Power Automate", "SQL", "Azure"]}
                  image="/placeholder.svg?height=200&width=400"
                />
                <ProjectCard
                  title="Social Media Monitoring"
                  description="Built a flow to monitor social media mentions, sentiment analysis, and alert stakeholders of critical mentions."
                  tags={["Power Automate", "AI Builder", "Power BI"]}
                  image="/placeholder.svg?height=200&width=400"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Get In Touch</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Contact Me</CardTitle>
                <CardDescription>
                  I'm open to freelance projects, knowledge sharing, and building scalable data solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Connect with me</h3>
                    <div className="flex flex-col space-y-3">
                      <a
                        href="https://www.linkedin.com/in/harish-btech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Linkedin size={20} />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href="https://www.instagram.com/_harish_annadurai_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-300"
                      >
                        <Instagram size={20} />
                        <span>Instagram</span>
                      </a>
                      <a
                        href="https://www.youtube.com/@Explore_with_Harish"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <Youtube size={20} />
                        <span>YouTube</span>
                      </a>
                      <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                      >
                        <Github size={20} />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">Support My Work</h3>
                    <a href="https://www.buymeacoffee.com/harishbtech" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Buy Me A Coffee</Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Harish Annadurai. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/harish-btech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/its_harish_offcl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@Explore_with_Harish"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Project Card Component
function ProjectCard({ title, description, tags, image }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="h-48 relative">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
        {tags.map((tag, index) => (
          <Badge key={index} variant="secondary">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}
