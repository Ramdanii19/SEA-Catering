import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

const SelectLabel = () => {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label>asdsa</Label>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="diet">Rencana Diet – Rp30.000,00 per makan</SelectItem>
          <SelectItem value="protein">Rencana Protein – Rp40.000,00 per makan</SelectItem>
          <SelectItem value="royal">Paket Royal – Rp60.000,00 per makanan </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectLabel