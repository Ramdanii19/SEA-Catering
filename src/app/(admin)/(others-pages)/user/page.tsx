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

const User = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>username</TableHead>
            <TableHead>email</TableHead>
            <TableHead>role</TableHead>
            <TableHead>Action</TableHead>
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

export default User