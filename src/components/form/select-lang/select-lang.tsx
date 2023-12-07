"use client"

import { useState } from "react"
import { ChevronsUpDownIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function SelectLang() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("en")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          role="combobox"
          aria-expanded={open}
          className="flex w-28 items-center justify-between"
        >
          {
            siteConfig.languages.find((language) => language.value === value)
              ?.label
          }
          <ChevronsUpDownIcon className="h-4 w-4 shrink-0" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandEmpty>No language found.</CommandEmpty>
          <CommandGroup>
            {siteConfig.languages.map((language) => (
              <CommandItem
                key={language.value}
                value={language.value}
                onSelect={(currentValue) => {
                  setValue(currentValue)
                  setOpen(false)
                }}
              >
                {language.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { SelectLang }
