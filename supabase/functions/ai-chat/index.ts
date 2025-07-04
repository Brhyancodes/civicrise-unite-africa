
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import "https://deno.land/x/xhr@0.1.0/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('AI Chat function called');
    
    const { message, context } = await req.json()
    console.log('Request data:', { message, context });
    
    if (!message) {
      throw new Error('Message is required')
    }

    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')
    console.log('OpenAI API Key available:', !!OPENAI_API_KEY);
    
    if (!OPENAI_API_KEY) {
      throw new Error('OpenAI API key not configured. Please add your OpenAI API key in the project settings.')
    }

    const systemPrompt = `You are a helpful AI assistant for a civic education platform created by BrhyanCodes. Your role is to:

1. Help users understand civic concepts, government processes, and community engagement
2. Answer questions about lessons they're taking
3. Provide additional context and examples for civic topics
4. Encourage active citizenship and community participation
5. Be supportive and educational in your responses

Keep your responses concise, engaging, and educational. Focus on practical civic knowledge that can help users become better citizens and community leaders.

${context ? `Current lesson context: ${context}` : ''}`

    console.log('Making request to OpenAI API');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    console.log('OpenAI API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', errorText);
      throw new Error(`OpenAI API error: ${response.status} - ${errorText}`)
    }

    const data = await response.json()
    console.log('OpenAI API response:', data);
    
    const aiResponse = data.choices[0]?.message?.content

    if (!aiResponse) {
      throw new Error('No response from AI')
    }

    console.log('Sending successful response');
    return new Response(
      JSON.stringify({ response: aiResponse }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('AI Chat Error:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message || 'An unexpected error occurred',
        details: 'Please check if the OpenAI API key is properly configured'
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
