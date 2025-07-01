import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Subscription = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>name</TableHead>
            <TableHead>phone number</TableHead>
            <TableHead>subscription</TableHead>
            <TableHead>type</TableHead>
            <TableHead>delivery</TableHead>
            <TableHead>alergies</TableHead>
            <TableHead>status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>ramdani</TableCell>
            <TableCell>ramdani0519@gmail.com</TableCell>
            <TableCell>User</TableCell>
            <TableCell>delete | Edit</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default Subscription