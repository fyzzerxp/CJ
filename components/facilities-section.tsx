const facilities = [
  {
    title: "Wheelchair Accessible",
    description: "All our facilities are fully wheelchair accessible with ramps, wide doorways, and accessible restrooms.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
        <circle cx="12" cy="6" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m-3 4l3-4 3 4" />
        <circle cx="12" cy="18" r="3" />
      </svg>
    ),
  },
  {
    title: "Sensory-Friendly Spaces",
    description: "Quiet rooms and sensory-friendly environments for individuals who may become overwhelmed.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Assistive Technology",
    description: "State-of-the-art assistive technology and adaptive equipment available throughout our centers.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: "Accessible Parking",
    description: "Convenient accessible parking spaces close to all entrances with proper signage.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "Visual Aids",
    description: "Clear signage, braille labels, and visual guides to help navigation throughout facilities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
      </svg>
    ),
  },
  {
    title: "Hearing Loop Systems",
    description: "Audio induction loop systems in meeting rooms and common areas for hearing aid users.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
  },
]

export function FacilitiesSection() {
  return (
    <section 
      id="facilities" 
      className="py-16 sm:py-24 bg-background"
      aria-labelledby="facilities-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 
            id="facilities-heading" 
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance"
          >
            Accessible Facilities
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our facilities are designed with accessibility at the forefront, 
            ensuring everyone can participate fully in our programs.
          </p>
        </div>

        <div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Facility accessibility features"
        >
          {facilities.map((facility) => (
            <div 
              key={facility.title}
              className="flex gap-4 p-5 bg-card border border-border rounded-xl"
              role="listitem"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0" aria-hidden="true">
                {facility.icon}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{facility.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6 sm:p-8 text-center">
          <p className="text-foreground font-medium">
            Need specific accommodations? We are here to help.
          </p>
          <p className="mt-2 text-muted-foreground">
            Contact us in advance and we will ensure your visit is comfortable and accessible.
          </p>
        </div>
      </div>
    </section>
  )
}
