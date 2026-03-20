import { Link } from "react-router-dom"
import { Mountain } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Mountain className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold text-foreground">CloudPeak</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              赋能企业数字化转型，以智能技术驱动商业增长。
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">快速导航</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-tech">首页</Link>
              <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-tech">产品服务</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-tech">联系我们</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">联系方式</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>邮箱：contact@cloudpeak.tech</span>
              <span>电话：400-888-9999</span>
              <span>地址：北京市海淀区中关村科技园</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 CloudPeak 云峰科技. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}