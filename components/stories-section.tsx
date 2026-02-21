const stories = [
  {
    name: "Emily R.",
    role: "Parent",
    quote:
      "CJ Support Services gave our family peace of mind. The home nursing team treats my mother with such dignity and kindness. We finally feel supported.",
    program: "Home Nursing",
  },
  {
    name: "Liam S.",
    role: "Caregiver",
    quote:
      "The caregiver guidance program helped me feel confident in providing safe and balanced care. I’m no longer overwhelmed — I feel prepared.",
    program: "Safety & Caregiver Guidance",
  },
  {
    name: "Sophia M.",
    role: "Parent",
    quote:
      "The child development sessions made a huge difference in my son’s growth. Through guided learning and support, he’s more confident and thriving at school.",
    program: "Child Development Programs",
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
  At CJ Support Services, every story reflects compassion, growth, and 
  real-life impact. Here’s how our care and programs are making a 
  meaningful difference in the lives of families we serve.
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

       
      </div>
    </section>
  )
}
