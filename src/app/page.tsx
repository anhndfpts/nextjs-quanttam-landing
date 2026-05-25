import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react";

const stats = [
  { value: "VN30", label: "Primary Market" },
  { value: "ML/AI", label: "Core Approach" },
  { value: "Quant", label: "Research Style" },
  { value: "FinTech", label: "Product Domain" },
];

const expertise = [
  {
    tag: "MARKET",
    name: "Vietnam Stock Market",
    desc: "Phân tích thị trường HOSE, HNX, chu kỳ dòng tiền và hành vi giá.",
  },
  {
    tag: "RESEARCH",
    name: "Quantitative Research",
    desc: "Signal research, backtesting, factor models và portfolio construction.",
  },
  {
    tag: "ML",
    name: "Machine Learning",
    desc: "Predictive models cho price movement, volatility và risk management.",
  },
  {
    tag: "AI",
    name: "AI Advisor",
    desc: "Personalized investment advisory engine dựa trên AI và behavioral data.",
  },
  {
    tag: "PRODUCT",
    name: "Robo-advisory",
    desc: "Automated portfolio management và rebalancing cho nhà đầu tư cá nhân.",
  },
  {
    tag: "BEHAVIOR",
    name: "Behavioral Finance",
    desc: "Phân tích thiên kiến nhà đầu tư, FOMO, panic selling và market anomalies.",
  },
];

const projects = [
  {
    tag: "AI / ADVISOR",
    title: "AI Investment Advisor",
    description:
      "Hệ thống tư vấn đầu tư ứng dụng AI, hành vi nhà đầu tư và dữ liệu thị trường thời gian thực.",
    status: "In Progress",
  },
  {
    tag: "RESEARCH",
    title: "Quant Research Engine",
    description:
      "Nghiên cứu tín hiệu giao dịch, chu kỳ thị trường, stock selection và backtesting framework.",
    status: "Active",
  },
  {
    tag: "ANALYTICS",
    title: "Investor Behavior Analytics",
    description:
      "Phân tích hành vi giao dịch, FOMO, panic selling và các thiên kiến tâm lý ảnh hưởng đến quyết định đầu tư.",
    status: "Research",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="size-4 text-primary" />
            <span className="font-mono text-sm font-semibold">
              QuantTam<span className="text-muted-foreground">.vn</span>
            </span>
          </div>
          <nav className="hidden items-center gap-6 sm:flex">
            <a
              href="#expertise"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Expertise
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-20 md:pt-28">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="font-mono text-xs text-primary">
              QUANT RESEARCHER · VIETNAM STOCK MARKET
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Building AI-driven{" "}
            <span className="text-primary">investment advisory</span>{" "}
            systems.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            Nghiên cứu và phát triển sản phẩm giao thoa giữa thị trường chứng
            khoán Việt Nam, quantitative research, machine learning và AI
            advisor.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="gap-2">
              Xem dự án <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline">
              Liên hệ
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value}>
              <div className="font-mono text-2xl font-bold text-primary">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section
        id="expertise"
        className="mx-auto max-w-6xl border-t border-border px-6 py-16"
      >
        <div className="mb-10">
          <p className="mb-2 font-mono text-xs text-primary">// EXPERTISE</p>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Chuyên môn trọng tâm
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Biến tri thức đầu tư, dữ liệu giao dịch và mô hình AI thành sản
            phẩm tư vấn ứng dụng thực tế.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="font-mono text-[10px] font-semibold tracking-widest text-primary">
                {item.tag}
              </span>
              <h3 className="mt-2 text-sm font-semibold">{item.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-6xl border-t border-border px-6 py-16"
      >
        <div className="mb-10">
          <p className="mb-2 font-mono text-xs text-primary">// PROJECTS</p>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Dự án & nghiên cứu
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Các hướng đang xây dựng để phát triển năng lực thương hiệu cá nhân
            và nền tảng sản phẩm dài hạn.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[10px] font-semibold tracking-widest text-primary">
                  {project.tag}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-medium ${
                    project.status === "Active"
                      ? "bg-primary/15 text-primary"
                      : project.status === "In Progress"
                        ? "bg-yellow-500/15 text-yellow-400"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-6xl border-t border-border px-6 py-16"
      >
        <div className="rounded-xl border border-border bg-card p-8 md:p-10">
          <p className="mb-2 font-mono text-xs text-primary">// CONTACT</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Kết nối & hợp tác
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Tôi đang xây dựng nền tảng cá nhân về chứng khoán, Quant, Machine
            Learning và AI Advisor. Liên hệ nếu bạn quan tâm đến nghiên cứu
            hoặc hợp tác sản phẩm.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="outline" className="gap-2">
              LinkedIn <ExternalLink className="size-3" />
            </Button>
            <Button variant="outline" className="gap-2">
              GitHub <ExternalLink className="size-3" />
            </Button>
            <Button variant="outline">Email</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="font-mono text-sm text-muted-foreground">
            QuantTam.vn
          </span>
          <span className="text-xs text-muted-foreground">
            © 2025 · Built with Next.js
          </span>
        </div>
      </footer>
    </div>
  );
}
