"use client";

import Link from "next/link";
import { useActionState } from "react";

import { sendContactMessage, type ContactFormState } from "@/app/contacto/actions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialState: ContactFormState = { status: "idle", submissionCount: 0 };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  // Un envío correcto redirige a /gracias (ver actions.ts) — el estado
  // "success" nunca llega a renderizarse aquí, solo se maneja "error"/"idle".

  // Al cambiar tras cada envío, esta key remonta los campos con los valores
  // que el usuario ya había escrito (defaultValue), en vez de dejarlos vacíos.
  const formKey = state.submissionCount;

  return (
    <form key={formKey} action={formAction} className="space-y-5" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">No rellenar este campo</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            defaultValue={state.values?.name}
            aria-invalid={!!state.fieldErrors?.name}
          />
          {state.fieldErrors?.name && (
            <p className="text-sm text-destructive">{state.fieldErrors.name}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            defaultValue={state.values?.phone}
            aria-invalid={!!state.fieldErrors?.phone}
          />
          {state.fieldErrors?.phone && (
            <p className="text-sm text-destructive">{state.fieldErrors.phone}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={state.values?.email}
            aria-invalid={!!state.fieldErrors?.email}
          />
          {state.fieldErrors?.email && (
            <p className="text-sm text-destructive">{state.fieldErrors.email}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="childAge">Edad del niño o adolescente</Label>
          <Input
            id="childAge"
            name="childAge"
            defaultValue={state.values?.childAge}
            aria-invalid={!!state.fieldErrors?.childAge}
          />
          {state.fieldErrors?.childAge && (
            <p className="text-sm text-destructive">{state.fieldErrors.childAge}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Cuéntame brevemente qué te trae por aquí</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          defaultValue={state.values?.message}
          aria-invalid={!!state.fieldErrors?.message}
        />
        {state.fieldErrors?.message && (
          <p className="text-sm text-destructive">{state.fieldErrors.message}</p>
        )}
      </div>

      <div>
        <div className="flex items-start gap-2.5">
          <Checkbox id="privacyConsent" name="privacyConsent" className="mt-0.5" />
          <Label htmlFor="privacyConsent" className="text-sm font-normal text-muted-foreground">
            He leído y acepto la{" "}
            <Link href="/politica-privacidad" className="underline underline-offset-2">
              política de privacidad
            </Link>
          </Label>
        </div>
        {state.fieldErrors?.privacyConsent && (
          <p className="mt-2 text-sm text-destructive">{state.fieldErrors.privacyConsent}</p>
        )}
      </div>

      {state.status === "error" && state.message && (
        <p className="text-sm text-destructive">{state.message}</p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={pending}>
        {pending ? "Enviando…" : "Enviar mensaje"}
      </Button>
    </form>
  );
}
