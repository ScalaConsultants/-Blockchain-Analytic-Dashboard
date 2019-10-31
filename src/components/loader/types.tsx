export interface LoaderProps {
  isLoading: boolean;
  fullPage?: boolean;
  loaderClass?: string;
  loaderContainerClass?: string;
  loaderSize?: number | string;
  containerClass?: Record<string, string>
}
