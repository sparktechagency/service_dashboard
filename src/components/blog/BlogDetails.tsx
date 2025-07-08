"use client"

import { Calendar, Tag, Clock, Share2, BookOpen } from "lucide-react"

const BlogDetails = () =>{
  const blogData = {
    title: "The Intertwined Power of Mindset and Growth",
    category: "mindset_&_growth",
    image: "/placeholder.svg?height=400&width=800",
    createdAt: "2025-07-08T05:36:25.792Z",
    content: `
      <h2>Cultivating Your Inner Garden: The Intertwined Power of Mindset and Growth</h2>
      
      <p>In a world that's constantly evolving, the most valuable asset you possess isn't your latest gadget or your highest degree – it's your mindset. And closely intertwined with mindset is the relentless pursuit of growth. Think of your mind as a garden: what you plant (your beliefs, thoughts, and attitudes) will ultimately determine what flourishes (your capabilities, resilience, and success).</p>

      <p>For too long, many of us have operated under the silent assumption that our intelligence and abilities are fixed. This is the <strong>fixed mindset</strong> at play. It whispers doubts, fears, and limitations: "I'm not good at math," "I'll never be a public speaker," or "That's just how I am." When faced with challenges, a fixed mindset often leads to giving up, fearing failure, or feeling threatened by the success of others. It views effort as a sign of weakness, believing that if you're truly talented, things should come easily.</p>

      <p>But what if your intelligence and abilities aren't static? What if they can be cultivated, expanded, and strengthened through dedication and hard work? This is the core of a <strong>growth mindset</strong>. Pioneered by psychologist Carol Dweck, a growth mindset believes that your most basic abilities can be developed through dedication and hard work—brains and talent are just the starting point. This view creates a love of learning and a resilience that is essential for great accomplishment.</p>

      <h3>Why is a Growth Mindset Your Superpower?</h3>

      <ol>
        <li>
          <p><strong>Embracing Challenges:</strong> Instead of shying away from difficulty, a growth mindset sees challenges as opportunities to learn and develop new skills. Each hurdle becomes a stepping stone, not a brick wall.</p>
        </li>
        <li>
          <p><strong>Learning from Failure:</strong> Failure isn't a verdict on your worth; it's data. With a growth mindset, setbacks become invaluable lessons, guiding you toward better strategies and greater understanding. It's about asking, "What can I learn from this?" rather than "I'm a failure."</p>
        </li>
        <li>
          <p><strong>Persistence and Resilience:</strong> When you believe your abilities can grow, you're far more likely to persevere through obstacles. The path to mastery is rarely linear, and a growth mindset equips you with the grit to navigate the inevitable ups and downs.</p>
        </li>
        <li>
          <p><strong>Inspiration from Others:</strong> Instead of feeling threatened, a growth mindset allows you to be inspired by others' successes. You see their achievements not as a limit on your own potential, but as a testament to what is possible through effort and dedication.</p>
        </li>
        <li>
          <p><strong>A Love for Learning:</strong> At its heart, a growth mindset fosters a deep love for continuous learning. You become curious, open to new ideas, and eager to acquire new knowledge and skills throughout your life.</p>
        </li>
      </ol>

      <h3>Cultivating Your Growth Mindset: Practical Steps</h3>

      <p>Shifting from a fixed to a growth mindset isn't an overnight transformation; it's a continuous practice. Here are some actionable steps:</p>

      <ul>
        <li>
          <p><strong>Become Aware of Your Inner Critic:</strong> Pay attention to the voice in your head. Is it fixed or growth-oriented? When you hear fixed mindset thoughts ("I can't do this"), consciously reframe them ("I can't do this <em>yet</em>, but I can learn.").</p>
        </li>
        <li>
          <p><strong>Embrace "Yet":</strong> This small word is incredibly powerful. "I don't understand this" becomes "I don't understand this <em>yet</em>." It implies potential and future learning.</p>
        </li>
        <li>
          <p><strong>Focus on Effort and Process, Not Just Outcome:</strong> Celebrate the hard work, the strategies you tried, and the progress you made, even if the final result wasn't perfect.</p>
        </li>
        <li>
          <p><strong>Seek Challenges:</strong> Intentionally put yourself in situations where you might not succeed immediately. Step outside your comfort zone.</p>
        </li>
        <li>
          <p><strong>Learn from Mistakes:</strong> After a setback, reflect on what went wrong and what you can do differently next time. View it as a learning opportunity.</p>
        </li>
        <li>
          <p><strong>Develop a Love for Learning:</strong> Read, explore new hobbies, take courses. Continuous learning fuels your belief in your capacity to grow.</p>
        </li>
        <li>
          <p><strong>Surround Yourself with Growth-Oriented People:</strong> The people you spend time with can significantly influence your mindset. Seek out those who uplift, challenge, and inspire you to grow.</p>
        </li>
      </ul>

      <h3>The Journey of Growth</h3>

      <p>Ultimately, growth isn't a destination; it's a journey. By actively nurturing a growth mindset, you're not just improving your skills; you're fundamentally changing your relationship with learning, challenges, and your own potential. You're building a foundation for lifelong development, resilience, and a richer, more fulfilling life.</p>

      <p>So, tend to your inner garden. Plant the seeds of curiosity, water them with effort, and watch as your capabilities flourish beyond what you ever thought possible.</p>
    `,
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatCategory = (category: string) => {
    return category
      .replace(/_/g, " ")
      .replace(/&/g, "&")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.replace(/<[^>]*>/g, "").split(/\s+/).length
    const readingTime = Math.ceil(wordCount / wordsPerMinute)
    return readingTime
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <span>Home</span>
            <span>/</span>
            <span>Blog</span>
            <span>/</span>
            <span className="text-gray-900 font-medium">Article</span>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
            <img
              src={blogData.image || "/placeholder.svg"}
              alt={blogData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-8 lg:p-12">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                  {formatCategory(blogData.category)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(blogData.createdAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{estimateReadingTime(blogData.content)} min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {blogData.title}
            </h1>

            {/* Share Button */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2 text-gray-600">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm">Article</span>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                <Share2 className="w-4 h-4" />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-em:text-gray-800
                prose-ol:space-y-4 prose-ul:space-y-4
                prose-li:text-gray-700 prose-li:leading-relaxed
                prose-li:pl-2
                prose-ol:pl-6 prose-ul:pl-6
                prose-li:marker:text-blue-600
              "
              dangerouslySetInnerHTML={{ __html: blogData.content }}
            />

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Author</p>
                    <p className="text-sm text-gray-600">Published on {formatDate(blogData.createdAt)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium">
                    Follow
                  </button>
                  <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors duration-200 font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      Personal Growth
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    Building Resilience in Challenging Times
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    Discover practical strategies to develop mental resilience and bounce back stronger from life's
                    challenges.
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>5 min read</span>
                    <span>2 days ago</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">Get the latest articles delivered to your inbox</p>
            <div className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


export default BlogDetails;