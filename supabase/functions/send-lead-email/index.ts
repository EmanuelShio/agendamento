import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface LeadData {
  name: string;
  whatsapp: string;
  websiteInstagram: string;
  email: string;
  service: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const leadData: LeadData = await req.json();

    const emailBody = `
Nova Lead Capturada - Kingdom Assessoria Quiz Funnel

Nome: ${leadData.name}
WhatsApp: ${leadData.whatsapp}
Website/Instagram: ${leadData.websiteInstagram || 'Não informado'}
E-mail: ${leadData.email}
Serviço Selecionado: ${leadData.service}

Data: ${new Date().toLocaleString('pt-BR')}

---
Esta lead foi capturada através do quiz funnel do site.
    `.trim();

    console.log('Lead received:', emailBody);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Lead received successfully',
        lead: leadData
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error('Error processing lead:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
