export function HowItWorksSection() {
  const steps = [
    { number: "1", title: "Home discovery" },
    { number: "2", title: "Compare prices" },
    { number: "3", title: "See neighborhood data" },
    { number: "4", title: "No inspection needed" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground  mb-12">
          Get your dream place, <span className="italic">no hassle</span>
        </h2>
        <div className="flex flex-wrap gap-4">
          {steps.map((step) => (
            <button
              key={step.number}
              className="px-6 py-3 rounded-full bg-muted text-muted-foreground font-medium text-sm sm:text-base hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <span className="font-bold mr-2">{step.number}</span>
              {step.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

