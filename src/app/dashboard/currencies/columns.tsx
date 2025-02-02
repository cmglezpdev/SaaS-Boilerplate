'use client'
import Link from 'next/link'
import { SquareArrowOutUpRightIcon } from 'lucide-react'
import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from '@/components/tables'
import { Checkbox } from '@/components/ui/checkbox'
import { AppLinks } from '@/content'
import { Currency } from '@/lib/db'

export const columns: ColumnDef<Currency>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader
        title='Name'
        column={column}
      />
    ),
    cell: ({ row }) => (
      <Link
        href={`${AppLinks.CurrenciesPage}/${row.original.id}`}
        className='underline flex gap-2'
      >
        {row.original.name}
        <SquareArrowOutUpRightIcon className='w-4 h-4' />
      </Link>
    )
  },
  {
    accessorKey: 'code',
    header: ({ column }) => (
      <DataTableColumnHeader
        title='Code'
        column={column}
      />
    )
  },
  {
    accessorKey: 'symbol',
    header: ({ column }) => (
      <DataTableColumnHeader
        title='Symbol'
        column={column}
      />
    )
  }
]
