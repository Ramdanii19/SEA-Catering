import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'

interface ModalProps {
  title: string;
  deskripsi: string;
  gizi?: string;
  manfaat?: string;
  cocokUntuk?: string;
}

const CustomModal = (props: ModalProps) => {
  const { title, deskripsi, gizi, manfaat, cocokUntuk } = props
  return (
    <div>
      <Dialog>
        <DialogTrigger><Button>Lihat Detail Lebih Lanjut</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <h4 className="font-semibold text-base">Deskripsi</h4>
                  <p>{deskripsi}</p>
                </div>
                {gizi && (
                  <div>
                    <h4 className="font-semibold text-base">Informasi Gizi</h4>
                    <p>{gizi}</p>
                  </div>
                )}
                {manfaat && (
                  <div>
                    <h4 className="font-semibold text-base">Manfaat</h4>
                    <p>{manfaat}</p>
                  </div>
                )}
                {cocokUntuk && (
                  <div>
                    <h4 className="font-semibold text-base">Cocok Untuk</h4>
                    <p>{cocokUntuk}</p>
                  </div>
                )}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CustomModal