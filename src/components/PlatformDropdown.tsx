import usePlatform from "./hooks/usePlatform";
import type { Platform } from "./hooks/usePlatform";

interface PlatformDropdownProps {
  onSelect: (platformSlug: string) => void;
}

const PlatformDropdown = ({ onSelect }: PlatformDropdownProps) => {
  const { data, loading, error } = usePlatform();

  if (loading) return <select disabled><option>Đang tải nền tảng...</option></select>;
  if (error) return <select disabled><option>{error}</option></select>;

  return (
    <select defaultValue="" onChange={e => onSelect(e.target.value)} style={{ width: 200, padding: 6 }}>
      <option value="" disabled>Chọn nền tảng</option>
      {data.map((platform: Platform) => (
        <option key={platform.id} value={platform.slug}>
          {platform.name}
        </option>
      ))}
    </select>
  );
};

export default PlatformDropdown;
