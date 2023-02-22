import { expect, describe, it, vi } from 'vitest';
import { initWidgets } from './widgets';

vi.mock('@arcgis/core/widgets/LayerList', () => {
  return {
    default: vi.fn(() => ({})),
  };
});
vi.mock('@arcgis/core/widgets/Legend', () => {
  return {
    default: vi.fn(() => ({})),
  };
});
vi.mock('@arcgis/core/widgets/Search', () => {
  return {
    default: vi.fn(() => ({})),
  };
});

vi.mock('@arcgis/core/widgets/Search/LayerSearchSource', () => {
  return {
    default: vi.fn(() => ({})),
  };
});

describe('widgets', () => {
  it('initializes widgets in view', () => {
    const widgets: unknown[] = [];

    const view = {
      ui: {
        add(w: unknown) {
          widgets.push(w);
        },
      },
    } as __esri.MapView;

    const layer = {} as __esri.FeatureLayer;

    initWidgets({ view, layer });
    expect(widgets).toHaveLength(2);
  });
});
