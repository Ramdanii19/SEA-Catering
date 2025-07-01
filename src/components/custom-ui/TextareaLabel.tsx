import React from 'react'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

interface TextareaProps {
  label: string
  placeholder: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextareaLabel = (props: TextareaProps) => {
  const { label, placeholder, value, onChange } = props
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label>{label}</Label>
      <Textarea placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}

export default TextareaLabel
