<template>
  <SpectraLayout>
    <template #challenge-tab>
      <ChallengeCard>
        <InstructionHeader>Tutorial</InstructionHeader>
        <InstructionRow row-type="Tutorial">
          Follow the tutorial (below) to learn how to use the spectrum tool.
        </InstructionRow>
      </ChallengeCard>
    </template>
    <template #tool-col>
      <ToolCard title="Draw a Spectrum" draw-only />
    </template>
  </SpectraLayout>
</template>
