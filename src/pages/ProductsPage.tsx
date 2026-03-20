import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Cloud,
  Brain,
  Lock,
  Database,
  BarChart3,
  Workflow,
  ArrowRight,
  Check,
} from "lucide-react"

const products = [
  {
    icon: Cloud,
    name: "云智平台",
    subtitle: "Cloud Intelligence Platform",
    desc: "新一代企业云计算基础设施，提供弹性计算、存储与网络服务。自动扩缩容、智能负载均衡，助力企业快速构建与部署应用。",
    highlights: ["弹性扩缩容", "99.99% SLA", "全球节点覆盖", "一键部署"],
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Brain,
    name: "AI 智析",
    subtitle: "AI Analytics Engine",
    desc: "基于深度学习的智能数据分析引擎，自动挖掘数据价值，生成可视化报告，为管理层提供精准决策支持。",
    highlights: ["深度学习模型", "实时数据处理", "自然语言查询", "智能预测"],
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: Lock,
    name: "安盾防护",
    subtitle: "SecureShield Protection",
    desc: "全链路安全防护体系，覆盖网络层、应用层到数据层。实时威胁检测、自动化应急响应，为企业数字资产保驾护航。",
    highlights: ["实时威胁检测", "自动应急响应", "合规审计报告", "零信任架构"],
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Database,
    name: "数据中台",
    subtitle: "Data Middle Platform",
    desc: "统一数据采集、治理与服务的企业数据中台，打破数据孤岛，实现数据资产的高效流转与复用。",
    highlights: ["数据资产目录", "ETL 自动化", "数据血缘追踪", "API 网关"],
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: BarChart3,
    name: "智能 BI",
    subtitle: "Smart Business Intelligence",
    desc: "面向业务用户的自助式 BI 工具，拖拽式报表构建，实时数据可视化，让数据分析触手可及。",
    highlights: ["拖拽式报表", "实时看板", "自动洞察", "移动端适配"],
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: Workflow,
    name: "流程引擎",
    subtitle: "Workflow Automation Engine",
    desc: "低代码流程自动化引擎，支持审批流、数据流、集成流的可视化编排，大幅提升企业运营效率。",
    highlights: ["可视化编排", "低代码构建", "第三方集成", "流程监控"],
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
]

export function ProductsPage() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold text-primary">
            产品服务
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            全场景智能科技产品
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            覆盖云计算、人工智能、安全防护、数据管理等核心领域，为企业提供一站式数字化解决方案。
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <Card
                key={p.name}
                className="hover-lift border-border/60 flex flex-col group"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <p.icon className={`w-6 h-6 ${p.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium tracking-wide">
                        {p.subtitle}
                      </p>
                      <CardTitle className="text-xl">{p.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {p.desc}
                  </CardDescription>
                  <ul className="grid grid-cols-2 gap-2">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground"
                      >
                        <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Link to="/contact" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full group-hover:border-primary group-hover:text-primary transition-tech"
                    >
                      立即咨询
                      <ArrowRight className="ml-1 w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-sky-50 border border-border/40 px-8 py-16 md:px-16 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              不确定哪款产品适合您？
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              我们的技术顾问将根据您的业务场景，为您推荐最优方案。
            </p>
            <Link to="/contact">
              <Button size="lg">
                预约免费咨询
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}