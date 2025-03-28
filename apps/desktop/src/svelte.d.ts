declare module '@haptic/ui/components/*' {
  import type { SvelteComponent, SvelteComponentTyped } from 'svelte';
  
  // For default exports (individual components)
  const component: typeof SvelteComponent;
  export default component;
  
  // For named exports (component collections)
  export interface ATypedSvelteComponent extends SvelteComponentTyped<any, any, any> {}
  export interface ConstructorOfATypedSvelteComponent {
    new (args: { target: any; props?: any; }): ATypedSvelteComponent;
  }
}

declare module '@haptic/ui/lib/*' {
  const value: any;
  export default value;
} 