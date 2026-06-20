// Hamza Shoes — shared Tailwind theme
// Palette: deep mahogany leather with antique-gold stitching accent.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream:    '#F1E9DD', // page background — light hide
        paper:    '#FBF8F4', // card / panel background
        espresso: '#221208', // darkest — footer, nav, deep text (near-black mahogany)
        saddle:   '#6B3A1F', // primary brand brown
        cognac:   '#9C6B3E', // secondary brown / hover
        rust:     '#A9381F', // CTA / accent (oxblood)
        charcoal: '#241B14', // body text
        thread:   '#C9A368', // stitching gold thread accent
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Jost"', 'sans-serif'],
      },
    },
  },
};
