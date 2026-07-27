import { formulario } from "@/content/site";
import { cn } from "@/lib/utils";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Reveal, SectionHeading } from "./primitives";

/**
 * Formulario comercial.
 * Conectado a Web3Forms para envío de leads comerciales.
 */
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "92691c56-97cf-4334-b043-b2f009218c48";

async function enviarSolicitud(datos: Datos): Promise<void> {
  const formData = new FormData();
  formData.append("access_key", WEB3FORMS_ACCESS_KEY);
  formData.append("subject", "Nueva solicitud de demo - Bot Inty");
  formData.append("from_name", "Sitio web Bot Inty");
  formData.append("name", `${datos.nombre} ${datos.apellido}`.trim());
  formData.append("email", datos.correo);
  formData.append("phone", datos.telefono);
  formData.append("company", datos.empresa);
  formData.append("cargo", datos.cargo);
  formData.append("area", datos.area);
  formData.append("empleados", datos.empleados);
  formData.append(
    "message",
    [
      `Proceso a automatizar: ${datos.proceso}`,
      `Mensaje adicional: ${datos.mensaje || "Sin mensaje adicional"}`,
      `Autorizacion de datos: ${datos.autorizacion ? "Si" : "No"}`,
    ].join("\n"),
  );

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const payload = (await response.json()) as { success?: boolean; message?: string };
  if (!response.ok || !payload.success) {
    throw new Error(payload.message || "No se pudo enviar el formulario");
  }
}

const esquema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre").max(80, "Máximo 80 caracteres"),
  apellido: z.string().trim().min(2, "Ingresa tu apellido").max(80, "Máximo 80 caracteres"),
  empresa: z.string().trim().min(2, "Ingresa el nombre de la empresa").max(120),
  cargo: z.string().trim().min(2, "Ingresa tu cargo").max(120),
  correo: z
    .string()
    .trim()
    .email("Ingresa un correo corporativo válido")
    .max(255, "Máximo 255 caracteres"),
  telefono: z
    .string()
    .trim()
    .min(7, "Ingresa un teléfono válido")
    .max(20, "Máximo 20 caracteres")
    .regex(/^[0-9+()\-\s]+$/, "Solo números y los signos + ( ) -"),
  empleados: z.string().min(1, "Selecciona un rango"),
  area: z.string().min(1, "Selecciona un área"),
  proceso: z.string().trim().min(3, "Cuéntanos qué proceso quieres automatizar").max(200),
  mensaje: z.string().trim().max(1000, "Máximo 1000 caracteres").optional().or(z.literal("")),
  autorizacion: z.literal(true, {
    errorMap: () => ({ message: "Debes autorizar el tratamiento de datos" }),
  }),
});

type Datos = z.infer<typeof esquema>;
type Errores = Partial<Record<keyof Datos, string>>;

const inputCls =
  "w-full rounded-xl bg-[oklch(0.16_0.05_278_/_80%)] border border-[oklch(0.35_0.06_280_/_45%)] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-[oklch(0.63_0.23_304)] focus:ring-2 focus:ring-[oklch(0.63_0.23_304_/_35%)]";

function Campo({
  id,
  label,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-muted-foreground text-xs font-semibold">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-destructive text-xs">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function Formulario() {
  const [errores, setErrores] = useState<Errores>({});
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (estado === "enviando") return; // protección contra envíos repetidos

    const fd = new FormData(e.currentTarget);
    const raw = {
      nombre: String(fd.get("nombre") ?? ""),
      apellido: String(fd.get("apellido") ?? ""),
      empresa: String(fd.get("empresa") ?? ""),
      cargo: String(fd.get("cargo") ?? ""),
      correo: String(fd.get("correo") ?? ""),
      telefono: String(fd.get("telefono") ?? ""),
      empleados: String(fd.get("empleados") ?? ""),
      area: String(fd.get("area") ?? ""),
      proceso: String(fd.get("proceso") ?? ""),
      mensaje: String(fd.get("mensaje") ?? ""),
      autorizacion: fd.get("autorizacion") === "on",
    };

    const parsed = esquema.safeParse(raw);
    if (!parsed.success) {
      const next: Errores = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Datos;
        if (!next[key]) next[key] = issue.message;
      }
      setErrores(next);
      return;
    }

    setErrores({});
    setEstado("enviando");
    try {
      await enviarSolicitud(parsed.data);
      e.currentTarget.reset();
      setEstado("ok");
    } catch {
      setEstado("error");
    }
  }

  return (
    <section id="demo" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Solicita una demo"
          title={formulario.titulo}
          highlight="Bot Inty"
          description={formulario.texto}
        />

        <Reveal className="glass mt-12 rounded-3xl p-6 sm:p-8">
          {estado === "ok" ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <span className="grid h-16 w-16 animate-[scale-in_0.4s_ease-out] place-items-center rounded-full bg-[image:var(--gradient-brand)] shadow-[var(--shadow-glow)]">
                <Check className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold">Recibimos tu solicitud</h3>
              <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
                Un especialista de Bot Inty te contactará para conocer los procesos que quieres
                transformar y agendar la demostración.
              </p>
              <button
                type="button"
                onClick={() => setEstado("idle")}
                className="glass mt-2 rounded-xl px-5 py-2.5 text-sm font-semibold"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
              <Campo id="nombre" label="Nombre" error={errores.nombre}>
                <input id="nombre" name="nombre" className={inputCls} autoComplete="given-name" placeholder="María" />
              </Campo>
              <Campo id="apellido" label="Apellido" error={errores.apellido}>
                <input id="apellido" name="apellido" className={inputCls} autoComplete="family-name" placeholder="Gómez" />
              </Campo>
              <Campo id="empresa" label="Empresa" error={errores.empresa}>
                <input id="empresa" name="empresa" className={inputCls} autoComplete="organization" placeholder="Nombre de tu empresa" />
              </Campo>
              <Campo id="cargo" label="Cargo" error={errores.cargo}>
                <input id="cargo" name="cargo" className={inputCls} autoComplete="organization-title" placeholder="Directora de talento humano" />
              </Campo>
              <Campo id="correo" label="Correo corporativo" error={errores.correo}>
                <input id="correo" name="correo" type="email" className={inputCls} autoComplete="email" placeholder="nombre@empresa.com" />
              </Campo>
              <Campo id="telefono" label="Teléfono" error={errores.telefono}>
                <input id="telefono" name="telefono" type="tel" className={inputCls} autoComplete="tel" placeholder="+57 300 000 0000" />
              </Campo>
              <Campo id="empleados" label="Número aproximado de empleados" error={errores.empleados}>
                <select id="empleados" name="empleados" className={inputCls} defaultValue="">
                  <option value="" disabled>
                    Selecciona un rango
                  </option>
                  {formulario.rangosEmpleados.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </Campo>
              <Campo id="area" label="Área de interés" error={errores.area}>
                <select id="area" name="area" className={inputCls} defaultValue="">
                  <option value="" disabled>
                    Selecciona un área
                  </option>
                  {formulario.areas.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </Campo>
              <Campo
                id="proceso"
                label="Proceso que desea automatizar"
                error={errores.proceso}
                className="sm:col-span-2"
              >
                <input
                  id="proceso"
                  name="proceso"
                  className={inputCls}
                  placeholder="Certificados laborales, desprendibles de nómina, soporte interno…"
                />
              </Campo>
              <Campo id="mensaje" label="Mensaje (opcional)" error={errores.mensaje} className="sm:col-span-2">
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  className={cn(inputCls, "resize-y")}
                  placeholder="Cuéntanos el contexto de tu organización"
                />
              </Campo>

              <div className="sm:col-span-2">
                <label htmlFor="autorizacion" className="flex items-start gap-3 text-sm">
                  <input
                    id="autorizacion"
                    name="autorizacion"
                    type="checkbox"
                    className="accent-violet mt-1 h-4 w-4 shrink-0"
                  />
                  <span className="text-muted-foreground leading-relaxed">
                    Autorizo el tratamiento de mis datos personales para ser contactado con fines
                    comerciales, de acuerdo con la política de tratamiento de datos.
                  </span>
                </label>
                {errores.autorizacion ? (
                  <p role="alert" className="text-destructive mt-1.5 text-xs">
                    {errores.autorizacion}
                  </p>
                ) : null}
              </div>

              {estado === "error" ? (
                <p role="alert" className="text-destructive sm:col-span-2 text-sm">
                  No pudimos enviar tu solicitud. Intenta nuevamente en unos minutos.
                </p>
              ) : null}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={estado === "enviando"}
                  className="text-primary-foreground inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {estado === "enviando" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Enviando…
                    </>
                  ) : (
                    formulario.boton
                  )}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
