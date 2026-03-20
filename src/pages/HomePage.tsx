import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { HeroDecoration } from "@/components/HeroDecoration"
import { Shield, Zap, BarChart3, Cloud, Brain, Lock, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "极速部署",
    desc: "从注册到上线仅需数分钟，开箱即用的企业级架构，零运维负担。",
  },
  {
    icon: Shield,
    title: "安全可靠",
    desc: "通过国际安全认证，端到端加密保障，多重灾备确保业务连续性。",
  },
  {
    icon: BarChart3,
    title: "数据驱动",
    desc: "实时数据分析与可视化看板，让每一个决策都有据可依。",
  },
]

const productPreviews = [
  {
    icon: Cloud,
    name: "云智平台",
    desc: "新一代企业云计算基础设施，弹性扩缩容，降本增效。",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Brain,
    name: "AI 智析",
    desc: "基于深度学习的智能数据分析引擎，洞察业务趋势。",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: Lock,
    name: "安盾防护",
    desc: "全链路安全防护体系，实时威胁检测与自动响应。",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
]

export function HomePage() {
  return (
    <main>
      {/* Hero — light, asymmetric */}
      <section className="pt-28 pb-20 md:pt-32 md:pb-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Text */}
            <div className="lg:col-span-3 space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                全新发布 — 云智平台 3.0
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-foreground tracking-tight">
                以智能技术
                <br />
                <span className="text-primary">驱动商业增长</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                CloudPeak 为企业提供云计算、人工智能与安全防护一体化解决方案，
                加速您的数字化转型之旅。
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/contact">
                  <Button size="lg">
                    免费试用
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline" size="lg">
                    了解产品
                  </Button>
                </Link>
              </div>
            </div>
            {/* Decoration */}
            <div className="lg:col-span-2 hidden lg:block">
              <HeroDecoration />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <p className="text-sm font-semibold text-primary">
              核心优势
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              为什么选择 CloudPeak
            </h2>
            <p className="text-muted-foreground">
              我们专注于企业级技术服务，以安全、高效、智能为核心，为客户创造持久价值。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <Card
                key={f.title}
                className="hover-lift border-border/60"
              >
                <CardHeader>
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {f.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <p className="text-sm font-semibold text-primary">
              产品服务
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              一站式智能科技方案
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productPreviews.map((p) => (
              <Card
                key={p.name}
                className="hover-lift border-border/60 group"
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl ${p.iconBg} flex items-center justify-center mb-3`}>
                    <p.icon className={`w-7 h-7 ${p.iconColor}`} />
                  </div>
                  <CardTitle className="text-lg">{p.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {p.desc}
                  </CardDescription>
                  <Link to="/products">
                    <Button variant="outline" size="sm" className="group-hover:border-primary group-hover:text-primary transition-tech">
                      了解详情
                      <ArrowRight className="ml-1 w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — light card style */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-sky-50 border border-border/40 px-8 py-16 md:px-16 md:py-20 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              准备好开启数字化转型了吗？
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              立即注册，获得 14 天免费试用，体验 CloudPeak 全线产品。
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link to="/contact">
                <Button size="lg">
                  立即试用
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  预约咨询
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}