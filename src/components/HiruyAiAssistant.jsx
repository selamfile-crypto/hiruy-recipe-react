import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { recipes } from '../data/recipes';

let messageIdCounter = 100;
const getNextMessageId = () => ++messageIdCounter;
const getFormattedTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

function HiruyAiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('hiruy_ai_api_key') || '');
  const [apiProvider, setApiProvider] = useState(() => localStorage.getItem('hiruy_ai_provider') || 'built-in');
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Selam! I'm your Hiruy Recipe AI culinary companion. Ask me anything about authentic Ethiopian dishes, injera sourdough fermentation, berbere spices, ingredient substitutions, or personalized recipe recommendations!",
      suggestedRecipes: ['doro-wot', 'shiro-tegamino'],
      timestamp: 'Just now'
    }
  ]);

  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  const saveSettings = (key, provider) => {
    setApiKey(key);
    setApiProvider(provider);
    localStorage.setItem('hiruy_ai_api_key', key);
    localStorage.setItem('hiruy_ai_provider', provider);
    setShowSettings(false);
  };

  const samplePrompts = [
    'How do I make authentic Doro Wat?',
    'What are traditional Ethiopian fasting dishes?',
    'How do I substitute teff flour for Injera?',
    'I have chicken, onions, and eggs. What should I cook?'
  ];

  // Built-in intelligent culinary knowledge engine
  const generateCulinaryResponse = (query) => {
    const q = query.toLowerCase();

    // Doro Wat
    if (q.includes('doro') || (q.includes('chicken') && (q.includes('ethiopian') || q.includes('stew') || q.includes('wat') || q.includes('wot')))) {
      return {
        text: "Doro Wat is the revered crown jewel of Ethiopian cuisine. The secret to an authentic flavor lies in slowly caramelizing finely pureed red onions with NO oil for at least 35-40 minutes first. Once the onions have reduced into a dark purple-red paste, add authentic Niter Kibbeh (spiced butter) and fragrant Berbere spice. Simmer chicken drumsticks until fork-tender and finish with scored hard-boiled eggs.",
        suggestedRecipes: ['doro-wot']
      };
    }

    // Shiro
    if (q.includes('shiro') || q.includes('chickpea') || q.includes('tegamino')) {
      return {
        text: "Shiro Tegamino is Ethiopia's most beloved everyday comfort dish! It is made with seasoned chickpea and broad bean powder whisked into a savory base of sautéed onions, garlic, ginger, and berbere. For the best result, whisk the powder gradually into simmering warm broth to avoid lumps, and let it bubble slowly in a clay pot (tegamino) until rich and glossy.",
        suggestedRecipes: ['shiro-tegamino']
      };
    }

    // Tibs
    if (q.includes('tibs') || (q.includes('beef') && q.includes('stir fry')) || q.includes('meat')) {
      return {
        text: "Awaze Beef Tibs requires intense heat! Use a cast-iron skillet over high heat. Sear bite-sized tenderloin or ribeye cubes in sizzling niter kibbeh for just 2-3 minutes to lock in juices. Toss in sliced red onions, fresh rosemary sprigs, jalapeños, and awaze paste (berbere blended with wine). A splash of dry red wine or Ethiopian honey wine (Tej) creates delicious caramelized pan drippings.",
        suggestedRecipes: ['beef-tibs']
      };
    }

    // Injera / Teff
    if (q.includes('injera') || q.includes('teff') || q.includes('ferment')) {
      return {
        text: "Injera is a naturally fermented sourdough flatbread made from teff flour—an ancient, nutrient-dense Ethiopian grain. The key to authentic injera with lots of porous 'eyes' (ayen) is a 2 to 3 day natural fermentation with an active starter (ersho), followed by the 'absit' technique (cooking a small portion of the batter in boiling water and mixing it back in to give the batter elasticity). If teff flour is unavailable, a 50/50 mix of whole wheat and club soda or buckwheat flour is a workable substitute.",
        suggestedRecipes: ['traditional-injera']
      };
    }

    // Fasting / Vegetarian / Vegan
    if (q.includes('fasting') || q.includes('vegetarian') || q.includes('vegan') || q.includes('ye\'tsom') || q.includes('yetsom')) {
      return {
        text: "Ethiopian cuisine features one of the world's most vibrant vegan food traditions! During Orthodox fasting periods (Ye’tsom), meals are entirely plant-based. A traditional 'Beyaynetu' platter includes Spicy Misir Wot (red lentils), Shiro (chickpea stew), Kik Alicha (mild turmeric split peas), Gomen (braised collard greens), and Atkilt Wot (cabbage and carrots), all served on fresh injera.",
        suggestedRecipes: ['ethiopian-feast', 'shiro-tegamino', 'misir-wot']
      };
    }

    // Berbere or Spices
    if (q.includes('berbere') || q.includes('spice') || q.includes('substitute') || q.includes('mitmita')) {
      return {
        text: "Berbere is the quintessential Ethiopian spice blend combining dried red chili peppers, garlic, ginger, korarima (Ethiopian cardamom), rue, cloves, fenugreek, and nigella seeds. If you don't have berbere, you can substitute a blend of 2 parts sweet paprika, 1 part cayenne pepper, 1 part ground ginger, and pinch of coriander, fenugreek, and allspice.",
        suggestedRecipes: ['doro-wot', 'misir-wot']
      };
    }

    // Soup
    if (q.includes('soup') || q.includes('broth') || q.includes('healthy')) {
      return {
        text: "For a wholesome, soothing meal, try our Garden Harvest Vegetable Soup or our velvety Herb & Roasted Garlic Soup. Sautéing a base of leeks, garlic, and fresh herbs brings out deep comfort without heavy creams.",
        suggestedRecipes: ['vegetable-soup', 'homemade-soup']
      };
    }

    // General / Ingredient Match
    if (q.includes('chicken') || q.includes('onion') || q.includes('egg')) {
      return {
        text: "With chicken, red onions, and eggs on hand, you have the exact foundation for Ethiopia's crown dish: Doro Wat! Check out our step-by-step recipe for exact proportions and cooking times.",
        suggestedRecipes: ['doro-wot']
      };
    }

    // Default friendly assistant response
    return {
      text: `That's a fantastic culinary question! At Hiruy Recipe, we celebrate both authentic Ethiopian heritage and comforting international dishes. Whether you want to master slow-simmered wots, make injera from scratch, or create 30-minute weeknight dinners, I am here to guide you. Would you like a step-by-step recipe, ingredient substitutions, or culinary tips?`,
      suggestedRecipes: ['doro-wot', 'shiro-tegamino', 'beef-tibs']
    };
  };

  const handleSendMessage = async (userText) => {
    const textToSend = userText || inputMessage;
    if (!textToSend.trim()) return;

    const newMsg = {
      id: getNextMessageId(),
      sender: 'user',
      text: textToSend,
      timestamp: getFormattedTime()
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputMessage('');
    setIsLoading(true);

    // If a custom Gemini or OpenAI API key is supplied, attempt live call
    if (apiKey && apiProvider === 'gemini') {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                {
                  role: 'user',
                  parts: [
                    {
                      text: `You are Hiruy Recipe AI, a world-class culinary expert on Ethiopian cuisine, injera, berbere spices, and international recipes. Answer this question warmly, accurately, and concisely:\n\n${textToSend}`
                    }
                  ]
                }
              ]
            })
          }
        );

        if (response.ok) {
          const data = await response.json();
          const aiReply = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (aiReply) {
            setMessages((prev) => [
              ...prev,
              {
                id: getNextMessageId(),
                sender: 'ai',
                text: aiReply,
                suggestedRecipes: ['doro-wot', 'shiro-tegamino'],
                timestamp: getFormattedTime()
              }
            ]);
            setIsLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn('Gemini API call failed, falling back to local culinary engine:', err);
      }
    }

    // Built-in intelligent engine fallback / primary mode
    setTimeout(() => {
      const response = generateCulinaryResponse(textToSend);
      setMessages((prev) => [
        ...prev,
        {
          id: getNextMessageId(),
          sender: 'ai',
          text: response.text,
          suggestedRecipes: response.suggestedRecipes,
          timestamp: getFormattedTime()
        }
      ]);
      setIsLoading(false);
    }, 600);
  };

  const handlePromptClick = (prompt) => {
    handleSendMessage(prompt);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full border border-[#ffbf24]/50 bg-[#070d12]/95 px-4 py-3 text-white shadow-[0_8px_32px_rgba(255,191,36,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#ffbf24] hover:shadow-[0_12px_40px_rgba(255,191,36,0.45)]"
          aria-label="Open Hiruy Recipe AI Assistant"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffbf24] opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#ffbf24]" />
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffbf24]/20 text-lg">
            ✨
          </span>

          <div className="text-left">
            <div className="text-xs font-bold text-[#ffbf24]">Hiruy AI</div>
            <div className="text-[10px] text-stone-400">Culinary Advisor</div>
          </div>
        </button>
      )}

      {/* Assistant Modal / Window */}
      {isOpen && (
        <aside
          aria-label="Hiruy Recipe AI Culinary Assistant"
          className={`fixed bottom-6 right-4 sm:right-6 z-50 flex w-[calc(100vw-2rem)] sm:w-[440px] flex-col rounded-3xl border border-white/15 bg-[#091117]/95 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-300 ${
            isMinimized ? 'h-[72px] overflow-hidden' : 'h-[620px] max-h-[88vh]'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#0e1922] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffbf24] to-[#ff5b4d] text-lg font-bold text-[#111820] shadow-md">
                ✨
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0e1922] bg-emerald-400" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white">Hiruy Recipe AI</h3>
                  <span className="rounded-full bg-[#ffbf24]/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#ffbf24]">
                    Culinary Guide
                  </span>
                </div>
                <p className="text-[11px] text-stone-400">
                  {apiProvider === 'built-in' ? 'Offline Culinary Intelligence' : 'Connected to Custom API'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {/* Settings Toggle */}
              <button
                type="button"
                onClick={() => setShowSettings(!showSettings)}
                className="rounded-lg p-2 text-stone-400 hover:bg-white/10 hover:text-white"
                title="AI Settings & API key"
                aria-label="AI Settings"
              >
                ⚙️
              </button>

              {/* Minimize */}
              <button
                type="button"
                onClick={() => setIsMinimized(!isMinimized)}
                className="rounded-lg p-2 text-stone-400 hover:bg-white/10 hover:text-white"
                title={isMinimized ? 'Expand' : 'Minimize'}
                aria-label={isMinimized ? 'Expand' : 'Minimize'}
              >
                {isMinimized ? '▲' : '▼'}
              </button>

              {/* Close */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-stone-400 hover:bg-white/10 hover:text-white"
                title="Close"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Settings Drawer */}
          {showSettings && !isMinimized && (
            <div className="border-b border-white/10 bg-[#121f2b] p-4 text-xs text-stone-300">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-bold text-white">AI Engine Configuration</span>
                <button
                  type="button"
                  onClick={() => setShowSettings(false)}
                  className="text-stone-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <p className="mb-3 text-[11px] text-stone-400 leading-relaxed">
                By default, Hiruy AI uses our specialized built-in Ethiopian &amp; global culinary knowledge base. You can also connect your own Gemini API key for live generative streaming.
              </p>

              <div className="space-y-2">
                <div>
                  <label className="mb-1 block text-[10px] uppercase tracking-wider text-stone-400">
                    Engine Provider
                  </label>
                  <select
                    value={apiProvider}
                    onChange={(e) => setApiProvider(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-[#091117] p-2 text-white outline-none"
                  >
                    <option value="built-in">Built-in Culinary Intelligence (Recommended)</option>
                    <option value="gemini">Google Gemini API (Bring Your Key)</option>
                  </select>
                </div>

                {apiProvider === 'gemini' && (
                  <div>
                    <label className="mb-1 block text-[10px] uppercase tracking-wider text-stone-400">
                      Gemini API Key
                    </label>
                    <input
                      type="password"
                      placeholder="AIzaSy..."
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#091117] p-2 text-white outline-none placeholder:text-stone-600"
                    />
                  </div>
                )}

                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => saveSettings(apiKey, apiProvider)}
                    className="rounded-lg bg-[#ffbf24] px-3 py-1.5 font-bold text-[#111820]"
                  >
                    Save Settings
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMessages([
                        {
                          id: getNextMessageId(),
                          sender: 'ai',
                          text: "Conversation reset. How can I help your cooking today?",
                          timestamp: 'Just now'
                        }
                      ]);
                      setShowSettings(false);
                    }}
                    className="rounded-lg bg-white/10 px-3 py-1.5 text-stone-300 hover:bg-white/20"
                  >
                    Clear Chat
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Messages Body */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-[#ffbf24] text-[#111820] font-medium rounded-tr-sm shadow-md'
                          : 'bg-[#121f2b] text-stone-200 border border-white/10 rounded-tl-sm'
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{msg.text}</div>

                      {/* Suggested Recipe Mini-Cards */}
                      {msg.suggestedRecipes && msg.suggestedRecipes.length > 0 && (
                        <div className="mt-3 border-t border-white/10 pt-2.5">
                          <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#ffbf24]">
                            Matching Recipes in Collection:
                          </p>
                          <div className="flex flex-col gap-2">
                            {msg.suggestedRecipes.map((recId) => {
                              const found = recipes.find((r) => r.id === recId);
                              if (!found) return null;
                              return (
                                <button
                                  type="button"
                                  key={found.id}
                                  onClick={() => {
                                    navigate(`/recipes/${found.id}`);
                                    setIsOpen(false);
                                  }}
                                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#091117] p-2 text-left transition hover:border-[#ffbf24]/50 hover:bg-white/5"
                                >
                                  <img
                                    src={found.image}
                                    alt={found.name}
                                    className="h-10 w-10 rounded-lg object-cover"
                                  />
                                  <div className="min-w-0 flex-1">
                                    <div className="truncate text-xs font-bold text-white">
                                      {found.name}
                                    </div>
                                    <div className="text-[10px] text-stone-400">
                                      {found.category} • {found.cookTime}
                                    </div>
                                  </div>
                                  <span className="text-xs font-bold text-[#ffbf24]">View →</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    <span className="mt-1 px-1 text-[9px] text-stone-500">
                      {msg.timestamp}
                    </span>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-center gap-2 text-stone-400 text-xs">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[#ffbf24]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[#ffbf24] [animation-delay:0.2s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[#ffbf24] [animation-delay:0.4s]" />
                    </div>
                    <span>Hiruy AI is thinking...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Sample Prompts */}
              <div className="border-t border-white/10 bg-[#0c161f] px-3 py-2">
                <div className="flex gap-2 overflow-x-auto pb-1 text-[11px] no-scrollbar">
                  {samplePrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => handlePromptClick(prompt)}
                      className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-stone-300 transition hover:border-[#ffbf24]/40 hover:bg-white/10 hover:text-white"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2 border-t border-white/10 bg-[#0e1922] p-3"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about Ethiopian recipes, spices, or cooking advice..."
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#070d12] px-4 py-2.5 text-xs text-white outline-none placeholder:text-stone-500 focus:border-[#ffbf24]/50"
                />

                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ffbf24] font-bold text-[#111820] transition disabled:opacity-40 hover:bg-[#ffd45a]"
                  aria-label="Send message"
                >
                  ➔
                </button>
              </form>
            </>
          )}
        </aside>
      )}
    </>
  );
}

export default HiruyAiAssistant;
