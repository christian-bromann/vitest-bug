export default async () => {
    const someCondition = true;
    const Dep = someCondition
        ? await import('a-vitest-test-moduleb')
        : await import('a-vitest-test-modulec');

    return Dep.default();
};
