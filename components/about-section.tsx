export function AboutSection() {

  const services = [
    {
      title: "Home Nursing Services",
      description:
        "Professional clinical care in the comfort of your own home, including medication assistance, wound care, diabetes monitoring, continence care, catheter support, post-hospital recovery and palliative care.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      ),
    },
    {
      title: "Dietitian Services",
      description:
        "Personalised nutrition guidance for children and adults, including those living with disability, autism, chronic conditions or food sensitivities. Practical meal plans and healthy routines that fit everyday life.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
          />
        </svg>
      ),
    },
    {
      title: "Disability Transport",
      description:
        "Safe and reliable transport to medical appointments, therapy sessions, school, work, social activities and community events. Accessible vehicles with trained, patient staff.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          />
        </svg>
      ),
    },
    {
      title: "Day Programs & Community Participation",
      description:
        "Support personal growth, social connection and life skill development through structured group activities, creative sessions, recreational programs and community outings tailored to individual goals.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      ),
    },
    {
      title: "Respite Care",
      description:
        "Short-term support allowing carers to take a break while their loved one remains safe, supported and engaged. Flexible in-home and community-based options including planned and emergency support.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Aged Care & Support at Home",
      description:
        "Help older adults live comfortably and safely at home with assistance in personal care, household tasks, transport, social engagement and health coordination. Ongoing dignity and independence.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      
     

      {/* Who We Are Section */}
      <section className="relative py-20 sm:py-28 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left Content */}
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Who We Are
              </h2>

              <div className="mt-8 space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  We understand that every situation is unique. Whether you are
                  a parent supporting a child with additional needs, an adult
                  managing a disability, or a carer who needs time to rest and
                  recharge, our team is here to support you with respect,
                  understanding and genuine care.
                </p>

                <p>
                  As a provider, our focus is not only on delivering services,
                  but on building long-term, trusted relationships that help
                  people feel safe, confident and supported in their everyday
                  lives.
                </p>

                <p>
                  We offer a coordinated range of supports designed to adapt to
                  changing needs and grow with each individual and family.
                </p>
              </div>
            </div>

              {/* Image */}
              <div className="relative w-full max-w-lg">
              <img
                src="/10.png"
                alt="Support and care"
                className="rounded-2xl shadow-xl object-cover object-right w-full h-[400px] sm:h-[500px]"
              />

              {/* Decorative glow */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 blur-3xl rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Why Families Trust Us */}
      <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Why Families Trust
              <span className="block text-primary mt-2">
                CJ Support Services
              </span>
            </h2>

            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Families choose us because we take the time to listen, understand
              and respond with care. Our services are guided by strong values,
              professional standards and a genuine commitment to the wellbeing
              of every individual we support.
            </p>

            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We offer flexible, person-centred care delivered by trained and
              compassionate professionals who respect each person's choices,
              culture and goals.
            </p>
          </div>

          {/* Trust Cards */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "We Listen",
                description:
                  "Taking time to understand your unique situation and needs",
              },
              {
                title: "We Adapt",
                description: "Flexible support that grows and changes with you",
              },
              {
                title: "We Care",
                description: "Genuine commitment to your wellbeing and dignity",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
            group
            relative
            bg-card
            border
            border-border
            rounded-2xl
            p-8
            text-center
            transition-all
            duration-500
            hover:-translate-y-3
            hover:shadow-xl
            hover:border-primary/40
          "
              >
                {/* Soft Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Our Promise */}
       <section
        className="relative py-16 sm:py-24 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/3.jpeg')", // put your image path here
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Promise</h2>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              At CJ SupportServices, we are here to support not just needs, but
              lives.
            </p>

            <p className="text-xl font-semibold">
              We don't just deliver services — we build relationships.
            </p>

            <p>
              We promise to treat every person with dignity, to communicate
              openly, and to provide care that truly makes a positive difference
              for individuals and families.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-bold text-foreground">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A coordinated range of supports designed to adapt to changing
              needs and grow with each individual and family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                role="listitem"
                className="
                  group
                  relative
                  bg-card 
                  border 
                  border-border 
                  rounded-xl 
                  p-6
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-3
                  hover:shadow-2xl
                  hover:border-primary/40
                  cursor-pointer
                "
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
