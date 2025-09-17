interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: "50K", label: "Movies & Shows", suffix: "+" },
  { value: "200", label: "Live Channels", suffix: "+" },
  { value: "4K", label: "Ultra HD Quality" },
];

export const StatsSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-bold text-gradient">
                  {stat.suffix === "+" && "~"}{stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-4xl md:text-5xl font-bold text-primary">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};