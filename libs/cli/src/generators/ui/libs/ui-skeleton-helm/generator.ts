import { Tree } from '@nx/devkit';
import { HlmBaseGeneratorSchema } from '../../../base/schema';
import hlmBaseGenerator from '../../../base/generator';

export async function generator(tree: Tree, options: HlmBaseGeneratorSchema) {
	return await hlmBaseGenerator(tree, {
		...options,
		primitiveName: 'skeleton',
		internalName: 'ui-skeleton-helm',
		publicName: 'ui-skeleton-helm',
	});
}
