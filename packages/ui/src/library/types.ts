export interface LibraryExample {
  /** Markup contoh, persis seperti sumber dokumentasi komponen. */
  html: string;
  /** Class wrapper contoh (parameter `class` pada dokumentasi). */
  class?: string;
  /** Class untuk body area contoh (parameter `bodyClass`). */
  bodyClass?: string;
  /** Tinggi area contoh dalam px (parameter `iframeHeight`). */
  iframeHeight?: string;
  iframeMaxHeight?: string;
  /** Skrip inisialisasi contoh (parameter `javascript`), mis. ApexCharts atau datatables. */
  javascript?: string;
}

export interface LibrarySection {
  title: string;
  level: number;
  description: string;
  examples: LibraryExample[];
}

export interface LibraryPage {
  title: string;
  intro: string;
  sections: LibrarySection[];
}

export interface LibraryEntry {
  /** mis. "components/alerts" */
  id: string;
  group: "Components" | "Forms" | "Typography" | "Plugins";
  title: string;
  /** Ringkasan singkat (maks ±200 karakter). */
  intro: string;
  sections: number;
  examples: number;
  load: () => Promise<LibraryPage>;
}
