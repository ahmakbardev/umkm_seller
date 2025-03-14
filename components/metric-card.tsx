import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon,Package, DollarSign, Info, MapPin } from "lucide-react";
import * as Icons from "lucide-react";

interface MetricCardProps {
  title: string;
  value: number | string;
  icon: keyof typeof Icons;
  change: number;
}

export function MetricCard({ title, value, icon, change }: MetricCardProps) {
  const Icon = Icons[icon] as React.ElementType;
  const isPositive = change >= 0;
  const ChangeIcon = isPositive ? ArrowUpIcon : ArrowDownIcon;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{value}</div>
          <p className="text-xs text-muted-foreground">
            <ChangeIcon
              className={`mr-1 h-4 w-4 inline ${
                isPositive ? "text-green-500" : "text-red-500"
              }`}
            />
            <span className={isPositive ? "text-green-500" : "text-red-500"}>
              {Math.abs(change)}%
            </span>{" "}
            from last month
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
