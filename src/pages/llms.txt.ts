import { getSite } from '../lib/sanity';
export async function GET() {
  const { settings, projects } = await getSite();
  const body = `# ${settings.name}\n\n${settings.seoDescription}\n\n## Pages\n- /: Portfolio\n- /about: Story\n\n## Projects\n${projects.map(p => `- /${p.slug?.current}: ${p.title}`).join('\n')}\n\n## Contact\n${settings.email}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
