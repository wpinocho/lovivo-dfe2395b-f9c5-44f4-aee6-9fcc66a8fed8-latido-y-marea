export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="flex items-center gap-3">
      <img 
        src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/dfe2395b-f9c5-44f4-aee6-9fcc66a8fed8/logo-adjusted.jpg"
        alt="Latido y Marea Logo"
        className="h-20 w-20 object-contain"
        style={{ backgroundColor: '#f4a07f' }} 
      />
      <span className="text-xl font-semibold text-white">Latido y Marea</span>
    </a>
  )
}