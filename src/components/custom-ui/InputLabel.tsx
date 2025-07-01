import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from "react"

interface InputProps {
  label: string
  type: string
  placeholder: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function InputLabel(props: InputProps) {
  const { label, type, placeholder, value, onChange } = props
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
