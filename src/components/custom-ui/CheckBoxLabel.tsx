import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from '@radix-ui/react-label'

interface CheckboxProps {
  label: string
  checked: boolean
  onChange: () => void
}

const CheckBoxLabel = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <div className="flex items-center gap-1">
      <Checkbox checked={checked} onCheckedChange={onChange} />
      <Label>{label}</Label>
    </div>
  )
}

export default CheckBoxLabel
