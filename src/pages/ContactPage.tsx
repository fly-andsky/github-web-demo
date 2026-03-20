import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { toast } from "@/components/ui/toast"
import { Send, Phone, Mail, MapPin } from "lucide-react"

interface FormData {
  name: string
  phone: string
  company: string
}

interface FormErrors {
  name?: string
  phone?: string
  company?: string
}

export function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", company: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)

  function validate(): boolean {
    const errs: FormErrors = {}
    if (!form.name.trim()) errs.name = "请输入姓名"
    if (!form.phone.trim()) {
      errs.phone = "请输入电话"
    } else if (!/^1[3-9]\d{9}$/.test(form.phone.trim())) {
      errs.phone = "请输入正确的手机号"
    }
    if (!form.company.trim()) errs.company = "请输入公司名称"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    setTimeout(() => {
      toast("提交成功！我们会尽快与您联系。", "success")
      setForm({ name: "", phone: "", company: "" })
      setErrors({})
      setSubmitting(false)
    }, 800)
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8 text-center space-y-4">
          <p className="text-sm font-semibold text-primary">
            联系我们
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            开启合作，从一次对话开始
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            留下您的联系方式，我们的专属顾问将在 24 小时内与您取得联系。
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="border-border/60 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">留资咨询</CardTitle>
                  <CardDescription>
                    填写以下信息，获取专属解决方案
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        姓名 <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        placeholder="请输入您的姓名"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        电话 <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="phone"
                        placeholder="请输入您的手机号"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive">{errors.phone}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium text-foreground"
                      >
                        公司 <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="company"
                        placeholder="请输入您的公司名称"
                        value={form.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className={errors.company ? "border-destructive" : ""}
                      />
                      {errors.company && (
                        <p className="text-xs text-destructive">
                          {errors.company}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={submitting}
                    >
                      {submitting ? (
                        "提交中..."
                      ) : (
                        <>
                          提交咨询
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                其他联系方式
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: Phone,
                    label: "咨询热线",
                    value: "400-888-9999",
                    sub: "工作日 9:00 - 18:00",
                  },
                  {
                    icon: Mail,
                    label: "商务邮箱",
                    value: "contact@cloudpeak.tech",
                    sub: "24 小时内回复",
                  },
                  {
                    icon: MapPin,
                    label: "公司地址",
                    value: "北京市海淀区中关村科技园",
                    sub: "CloudPeak 大厦 A 座 12 层",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-tech">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm text-foreground/80">{item.value}</p>
                      <p className="text-xs text-muted-foreground">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}