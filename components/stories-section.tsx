const stories = [
  {
    name: "Maria Johnson",
    role: "Program Participant",
    quote: "The employment program helped me find a job that I love. For the first time, I feel truly independent and valued at work.",
    program: "Employment Programs",
  },
  {
    name: "David Chen",
    role: "Parent",
    quote: "The family support group has been a lifeline for us. Knowing we are not alone and having access to resources has made all the difference.",
    program: "Family Resources",
  },
  {
    name: "Sarah Williams",
    role: "Program Graduate",
    quote: "Through therapy services, I gained the strength and skills to pursue my dream of becoming an artist. Now I teach art classes here!",
    program: "Therapy Services",
  },
]

export function StoriesSection() {
  return (
    <section 
      id="stories" 
      className="py-16 sm:py-24 bg-secondary"
      aria-labelledby="stories-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 
            id="stories-heading" 
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Stories of Impact
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from real people whose lives have been transformed 
            through our programs and community.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          role="list"
          aria-label="Success stories"
        >
          {stories.map((story) => (
            <article 
              key={story.name}
              className="bg-card border border-border rounded-xl p-6 lg:p-8"
              role="listitem"
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="text-xl font-bold text-primary">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{story.name}</h3>
                  <p className="text-sm text-muted-foreground">{story.role}</p>
                </div>
              </div>
              <blockquote>
                <p className="text-foreground leading-relaxed italic">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </blockquote>
              <p className="mt-4 text-sm text-primary font-medium">{story.program}</p>
            </article>
          ))}
        </div>

        {/* Impact Numbers */}
        <div className="mt-16 bg-primary rounded-xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-8">
            Our Impact in Numbers
          </h3>
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            role="list"
            aria-label="Impact statistics"
          >
            {[
              { number: "92%", label: "Program satisfaction rate" },
              { number: "85%", label: "Employment success rate" },
              { number: "3,000+", label: "Families supported annually" },
              { number: "$2M+", label: "Scholarships awarded" },
            ].map((stat) => (
              <div key={stat.label} role="listitem">
                <p className="text-3xl sm:text-4xl font-bold text-primary-foreground">
                  {stat.number}
                </p>
                <p className="mt-2 text-sm sm:text-base text-primary-foreground/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
