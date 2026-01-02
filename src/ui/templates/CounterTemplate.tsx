"use client";
import { useAppSelector } from "@/store"
import { Logo } from "../atoms/Logo"


export const CounterTemplate = () => {

const { counter } = useAppSelector((state) => state)
  return <main>
    <div>
      <h1>okultum app {counter.value}</h1>
      <Logo />
    </div>
  </main>
}
