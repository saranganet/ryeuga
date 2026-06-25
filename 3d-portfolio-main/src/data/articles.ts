export interface ArticleBlock {
  type: "paragraph" | "heading";
  text: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;       // e.g. "APR 28, 2026"
  readingTime: string; // e.g. "5 MIN READ"
  category: string;    // e.g. "AI", "Startups", "Coding", "College"
  link: string;        // Optional link
  icon: string;        // Emoji
  content: ArticleBlock[];
}

export const articles: Article[] = [
  {
    id: "automating-sales-edtech",
    title: "why legacy CRMs and sales software are dinosaurs",
    description: "Traditional sales rooms are running on outdated, low-metric spreadsheets. We built CloseIQ to destroy the legacy bloat.",
    date: "JUN 20, 2026",
    readingTime: "7 MIN READ",
    category: "Startups",
    link: "#",
    icon: "📈",
    content: [
      {
        type: "heading",
        text: "the manual trap"
      },
      {
        type: "paragraph",
        text: "Walk into the office of any massive legacy company. It is literally a loud call center. Hundreds of human sales agents sitting in crowded boxes dialling numbers manually and reading static sheets. In the age of automated telemetry and AI-driven workflows, this is a joke. It is slow. It is expensive."
      },
      {
        type: "heading",
        text: "why voice AI is hard"
      },
      {
        type: "paragraph",
        text: "Everyone talks about voice AI but nobody actually deploys it. Latency is the death metric. If a connection takes 3 seconds to respond, it's not a conversation—it's a laggy dial-up modem. Also, code-mixed language kills standard models. If your model can't parse Hinglish or regional shifts in milliseconds, you are losing value."
      },
      {
        type: "heading",
        text: "dinosaurs are stuck"
      },
      {
        type: "paragraph",
        text: "Legacy enterprise CRMs have zero developer ergonomics. Fetching user telemetry takes custom middleware and days of debate. Sales agents spend 30% of their day copypasting text into administrative voids. Automated agents need high-speed direct APIs, not sluggish legacy database queries."
      },
      {
        type: "heading",
        text: "the closeiq thesis"
      },
      {
        type: "paragraph",
        text: "We aren't building fully automated robots that users hang up on. We built CloseIQ to be a silent real-time copilot. It intercepts the audio, runs it through sub-100ms pipelines, suggest rebuttals instantly, and logs the metrics to the database. Zero human friction. High conversion."
      }
    ]
  },
  {
    id: "googles-long-game-monopoly",
    title: "google's playbook: vertical monopoly from day one",
    description: "An inspection of how Google locked down Chrome, Android, and custom silicon to build an unbreakable ad cash cow. Brilliant, cold execution.",
    date: "MAY 18, 2026",
    readingTime: "5 MIN READ",
    category: "AI",
    link: "#",
    icon: "🔍",
    content: [
      {
        type: "heading",
        text: "hardware arbitrage"
      },
      {
        type: "paragraph",
        text: "While legacy search engines spent millions on massive specialized mainframes, Google bought off-the-shelf commodity hardware and linked them into a distributed array. They indexed the web at fraction of the cost, serving queries in milliseconds. They won the cost metric before the competition understood the game."
      },
      {
        type: "heading",
        text: "chrome as a gateway"
      },
      {
        type: "paragraph",
        text: "Launching Chrome wasn't about web standards. It was defensive infrastructure. By owning the browser, they secured the default entry point. Nobody could intercept their query funnel. It was a brilliant, predatory play."
      },
      {
        type: "heading",
        text: "free mobile infiltration"
      },
      {
        type: "paragraph",
        text: "Google acquired Android and gave it to hardware developers for zero cost. It looked like charity, but it was Trojan horse telemetry. The licensing dictated that Google Play, Search, and Chrome must be preloaded. They captured the mobile web before legacy media realized desktop was dead."
      },
      {
        type: "heading",
        text: "full vertical stack"
      },
      {
        type: "paragraph",
        text: "Now they build their own custom silicon (TPUs). They control the chips, the models, the operating system, and the client endpoints. It is a vertically integrated fortress where every layer extracts rent. You don't compete with that. You either build your own stack or you die in theirs."
      }
    ]
  },
  {
    id: "attaining-flow-state-building",
    title: "attaining execution flow: cutting the noise",
    description: "High-conviction building isn't about willpower. It is about ruthless context deletion, blocking calendar spam, and shipping hourly.",
    date: "APR 12, 2026",
    readingTime: "4 MIN READ",
    category: "Coding",
    link: "#",
    icon: "🧠",
    content: [
      {
        type: "heading",
        text: "delete context switches"
      },
      {
        type: "paragraph",
        text: "High-performing builders don't have magic brains; they just guard their runtime. Checking a slack notification destroys your focus loop for 20+ minutes. If you allow random alerts to disrupt your processing, your output degrades. Build absolute firewalls around your focus."
      },
      {
        type: "heading",
        text: "minimize low-value state"
      },
      {
        type: "paragraph",
        text: "Decision fatigue is a real tax. Steve Jobs or Mark Zuckerberg wearing the exact same clothes every day isn't a branding gimmick—it's state minimization. Save your cognitive bandwidth for complex systems architecture, not for choosing color combinations."
      },
      {
        type: "heading",
        text: "time-blocking as a filter"
      },
      {
        type: "paragraph",
        text: "Never build defensively. Do not react to incoming pings. Block 4-hour chunks of absolute silence. Shut down channels. Align your tasks with your circadian spikes—high-complexity coding in the morning, administrative noise in the afternoon."
      },
      {
        type: "heading",
        text: "tight feedback loops"
      },
      {
        type: "paragraph",
        text: "Momentum is your only metric. Break macro goals into hourly iterations. Shipping tiny changes keeps the processing pipeline warm, driving continuous execution. Keep the cycle tight."
      }
    ]
  },
  {
    id: "art-of-not-being-seen",
    title: "ghost mode: why public building is a clout trap",
    description: "Building in public is for dopamine addicts. Real conviction is forged in absolute silence where you don't seek validation.",
    date: "MAR 02, 2026",
    readingTime: "4 MIN READ",
    category: "College",
    link: "#",
    icon: "👤",
    content: [
      {
        type: "heading",
        text: "the clout metric trap"
      },
      {
        type: "paragraph",
        text: "The internet demands that you post build logs, celebrate vanity metrics, and tweet daily. That optimization vector is toxic. You end up building consensus systems that get retweets rather than high-conviction, asymmetrical software."
      },
      {
        type: "heading",
        text: "conviction in isolation"
      },
      {
        type: "paragraph",
        text: "Working in ghost mode provides room to experiment, fail, and run buggy iterations without public audit. Radical software looks useless at the start. If you request constant consensus validation, you'll never ship anything truly disruptive."
      },
      {
        type: "heading",
        text: "capability > personal brand"
      },
      {
        type: "paragraph",
        text: "Many 'builders' spend more energy polishing their bios and landing pages than optimizing their database indexes. True conviction comes from raw engineering capabilities, not from personal brand optimization. Get good, then go quiet."
      },
      {
        type: "heading",
        text: "depth over applause"
      },
      {
        type: "paragraph",
        text: "Ghost mode is prioritizing deep processing over superficial noise. Mute all notifications. Measure success by the complexity of the systems you ship, not by standard social metrics."
      }
    ]
  }
];
