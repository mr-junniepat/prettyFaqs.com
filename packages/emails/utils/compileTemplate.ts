import * as handlebars from "handlebars";

export function compileTemplate(template: string, data: Record<string, any>): string {
  const compiledTemplate = handlebars.compile(template);
  const htmlBody = compiledTemplate(data);
  return htmlBody;
}