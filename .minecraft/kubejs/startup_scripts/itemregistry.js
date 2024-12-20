Platform.mods.kubejs.name = 'GregTech';
Platform.mods.bloodmagic.name = 'GregTechBM';

StartupEvents.registry('item', sog => {
    //Universal circuits
        const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv"]
        tiers.forEach((universal_circuit) => {
            sog.create(universal_circuit + "_universal_circuit")
                .tag("gtceu:circuits/" + universal_circuit)
                .tag("gtceu:circuits/universal")
                .displayName(universal_circuit.toUpperCase() + " Universal Circuit")
                .tooltip("§7A Universal Circuit")
                .textureJson({ layer0: `kubejs:item/universal_circuit/${universal_circuit}_universal_circuit` })
        })

    // Circuit stuff
sog.create('star_extruder_mold').maxStackSize(64).glow(true).displayName('Extruder Mold (Star)')
sog.create('resonant_processor').maxStackSize(64).displayName('Resonant Processor').tooltip('§2ZPM-Tier Circuit')
sog.create('resonant_processor_assembly').maxStackSize(64).displayName('Resonant Processor Assembly').tooltip('§2UV-Tier Circuit')
sog.create('resonant_processor_computer').maxStackSize(64).displayName('Resonant Processor Computer').tooltip('§2UHV-Tier Circuit')
sog.create('resonant_processor_mainframe').maxStackSize(64).displayName('Resonant Processor Mainframe').tooltip('§2UEV-Tier Circuit')
sog.create('dragon_processor').maxStackSize(64).displayName('Dragon Processor').tooltip('§5UV-Tier Circuit')
sog.create('dragon_processor_assembly').maxStackSize(64).displayName('Dragon Processor Assembly').tooltip('§5UHV-Tier Circuit')
sog.create('dragon_processor_computer').maxStackSize(64).displayName('Dragon Processor Computer').tooltip('§5UEV-Tier Circuit')
sog.create('dragon_processor_mainframe').maxStackSize(64).displayName('Dragon Processor Mainframe').tooltip('§5UIV-Tier Circuit')
sog.create('cosmic_processor').maxStackSize(64).displayName('Cosmic Processor').tooltip('§0UHV-Tier Circuit')
sog.create('cosmic_processor_assembly').maxStackSize(64).displayName('Cosmic Processor Assembly').tooltip('§0UEV-Tier Circuit')
sog.create('cosmic_processor_computer').maxStackSize(64).displayName('Cosmic Processor Computer').tooltip('§0UIV-Tier Circuit')
sog.create('cosmic_processor_mainframe').maxStackSize(64).displayName('Cosmic Processor Mainframe').tooltip('§0UXV-Tier Circuit')
sog.create('space_time_processor').maxStackSize(64).displayName('Space Time Processor').tooltip('§bUEV-Tier Circuit')
sog.create('space_time_processor_assembly').maxStackSize(64).displayName('Space Time Processor Assembly').tooltip('§bUIV-Tier Circuit')
sog.create('space_time_processor_computer').maxStackSize(64).displayName('Space Time Processor Computer').tooltip('§bUXV-Tier Circuit')
sog.create('space_time_processor_mainframe').maxStackSize(64).displayName('Space Time Processor Mainframe').tooltip('§bOPV-Tier Circuit')
sog.create('dimensional_circuit_board').maxStackSize(64).displayName('Dimensional Circuit Board')
sog.create('dimensional_processing_unit').maxStackSize(64).displayName('Dimensional Processing Unit')
sog.create('dimensional_processor').maxStackSize(64).displayName('Dimensional Processor').tooltip('§f§lUIV-Tier Circuit')
sog.create('dimensional_processor_assembly').maxStackSize(64).displayName('Dimensional Processor Assembly').tooltip('§f§lUXV-Tier Circuit')
sog.create('dimensional_processor_computer').maxStackSize(64).displayName('Dimensional Processor Computer').tooltip('§f§lOPV-Tier Circuit')
sog.create('dimensional_processor_mainframe').maxStackSize(64).displayName('Dimensional Processor Mainframe').tooltip('§f§lMAX-Tier Circuit')

    // Condensed / Atomic Stuff
sog.create('condensed_star_matter').maxStackSize(64).displayName('Condensed Star Matter').tooltip('Matter of gods')
sog.create('quantum_energy_capsule').maxStackSize(64).displayName('Quantum Energy Capsule').tooltip('Not safe for work')
sog.create('gravitational_containment_cell').maxStackSize(64).displayName('Gravitational Containment Cell')
sog.create('gravitational_fluctuation_module').maxStackSize(64).displayName('Gravitational Fluctuation Module')
sog.create('exotic_matter').maxStackSize(64).displayName('§5Exotic Matter')
sog.create('stable_matter').maxStackSize(64).displayName('Stable Matter')
sog.create('atomically_compressed_black_hole').maxStackSize(64).displayName('Atomically-Compressed Black Hole').tooltip('§0Hold with caution. Maintains an Event Horizon')
sog.create('quantum_resonant_core').maxStackSize(64).displayName('Quantum Resonant Core')
    //Singularities Stuff 
sog.create('antimattersingularity').maxStackSize(64).displayName('Antimatter Catalyst Singularity').glow(true).tooltip('Not safe for work')
sog.create('stabilized_collapsed_singularity').maxStackSize(64).displayName('Stabilized Collapsed Singularity')    
sog.create('fallen_singularity').maxStackSize(64).displayName('Fallen Singularity').tooltip('§cNot-Stabilized Collapsed Singularity')
//voltage coils
sog.create('uhv_voltage_coil').maxStackSize(64).displayName('Ultra High Voltage Coil')
sog.create('uev_voltage_coil').maxStackSize(64).displayName('Ultra Excessive Voltage Coil')
sog.create('uiv_voltage_coil').maxStackSize(64).displayName('Ultra Immense Voltage Coil')
sog.create('uxv_voltage_coil').maxStackSize(64).displayName('Ultra Extreme Voltage Coil')
sog.create('opv_voltage_coil').maxStackSize(64).displayName('Overpowered Voltage Coil')
sog.create('max_voltage_coil').maxStackSize(64).displayName('Max Voltage Coil')
    //uevstuff
sog.create('rad_primary_resonant_particles').maxStackSize(16).displayName('Rad-Primary Resonant Particles')
sog.create('primal_resonant_core').maxStackSize(64).displayName('Primal Resonant Core')
sog.create('antimatter_boule').maxStackSize(64).displayName('Antimatter-Doped Monocrystalline Silicon Boule')
sog.create('highly_resonative_soc').maxStackSize(64).displayName('Highly-Resonative Soc')
sog.create('highly_resonative_circuit_board').maxStackSize(64).displayName('Highly-Resonative Circuit Board')
sog.create('highly_resonative_printed_circuit_board').maxStackSize(64).displayName('Highly-Resonative Printed Circuit Board')
    //extras
sog.create('end_miner_module').maxStackSize(1).displayName('End Miner Module')
sog.create('quantum_data_module').maxStackSize(1).displayName('Quantum Data Module').texture('kubejs:item/misc/quantum_data_module')
    //tube
sog.create('chlorine_tube').maxStackSize(1).displayName('Chlorine Tube').texture('kubejs:item/tubes/chlorine_tube')
sog.create('mycena_hypsizyga_dna').maxStackSize(1).displayName('Mycena Hypsizyga DNA Sample').texture('kubejs:item/tubes/dna_sample_mychyps')
        //heavy plating
sog.create('cosmic_neutronium_heavy_plating').displayName('Cosmic Neutronium Heavy Plating').texture('kubejs:item/heavy_plating/cosmic_neutronium_heavy_plating')
sog.create('awakened_draconium_heavy_plating').displayName('Awakened Draconium Heavy Plating').texture('kubejs:item/heavy_plating/awakened_draconium_heavy_plating')
sog.create('draconium_heavy_plating').displayName('Draconium Heavy Plating').texture('kubejs:item/heavy_plating/draconium_heavy_plating')
sog.create('neutronium_heavy_plating').displayName('Neutronium Draconium Heavy Plating').texture('kubejs:item/heavy_plating/neutronium_heavy_plating')
sog.create('infinity_heavy_plating').displayName('Infinity Heavy Plating').texture('kubejs:item/heavy_plating/infinity_heavy_plating')
sog.create('chaotic_heavy_plating').displayName('Chaotic Heavy Plating').texture('kubejs:item/heavy_plating/chaotic_heavy_plating')

})

StartupEvents.registry('block', sog => {

    // C A S I N G S

    sog.create('neutronate_enriched_atomic_casing')
        .displayName('Neutronate Enriched Atomic Casing')
        .textureAll('kubejs:block/atomic/casing')
        .soundType('metal')
        .resistance(1)
        .lightLevel(0)
        .tagBlock('mineable:pickaxe')
    sog.create('supercritical_neutronium_casing')
        .displayName('Supercritical Neutronium Casing')
        .textureAll('kubejs:block/neutronium/casing')
        .soundType('metal')
        .resistance(1)
        .lightLevel(0)
        .tagBlock('mineable:pickaxe')
    sog.create('neutronium_casing')
        .displayName('Neutronium Casing')
        .textureAll('kubejs:block/neutronium/ncasing')
        .soundType('metal')
        .resistance(1)
        .lightLevel(0)
        .tagBlock('mineable:pickaxe')
    sog.create('kaemite_casing')
        .displayName('Kaemite Casing')
        .textureAll('kubejs:block/casings/kaemite_casing')
        .soundType('metal')
        .resistance(1)
        .lightLevel(0)
        .tagBlock('mineable:pickaxe')
    sog.create('quantum_casing')
        .displayName('Quantum Casing')
        .textureAll('kubejs:block/casings/quantum_casing')
        .soundType('metal')
        .resistance(1)
        .lightLevel(0)
        .tagBlock('mineable:pickaxe')
    sog.create('reinforced_computation_casing')
        .displayName('Reinforced Computation Casing')
        .textureAll('kubejs:block/casings/reinforced_computation_casing')
        .soundType('metal')
        .resistance(1)
        .lightLevel(0)
        .tagBlock('mineable:pickaxe')
    sog.create('large_precision_casing')
        .displayName('Large Precision Casing')
        .textureAll('kubejs:block/casings/large_precision_casing')
        .soundType('metal')
        .resistance(1)
        .lightLevel(0)
        .tagBlock('mineable:pickaxe')
    sog.create('component_tile_casing')
        .displayName('Component Tile Casing')
        .textureAll('kubejs:block/casings/component_tile_casing')
        .soundType('metal')
        .resistance(1)
        .lightLevel(0)
        .tagBlock('mineable:pickaxe')

        // F U S I O N   M K 4

        sog.create('fusion_casing_mk4')
        .displayName('Fusion Casing MK IV')
        .textureAll('kubejs:block/fusion/fusion_casing_mk4')
        .soundType('metal')
        .resistance(1)
        .lightLevel(0)
        .tagBlock('mineable:pickaxe')
        sog.create('fusion_coil_mk2')
        .displayName('Fusion Coil MK II')
        .textureAll('kubejs:block/fusion/fusion_coil_mk2')
        .soundType('metal')
        .resistance(1)
        .lightLevel(0)
        .tagBlock('mineable:pickaxe')
        sog.create('fusion_glass_mk2')
        .displayName('Reinforced Fusion Glass')
        .textureAll('kubejs:block/fusion/fusion_glass_mk2')
        .soundType('glass')
        .resistance(1)
        .lightLevel(0)
        .defaultCutout()
        .tagBlock('mineable:pickaxe')

    // P R O J E C T O R   M O D U L E S
    
    sog.create('drilling_projector_module')
        .displayName('Space Drill Projector Module')
        .textureAll('kubejs:block/projector/drilling_projector_module')
        .soundType('metal')
        .resistance(1)
        .lightLevel(0)
        .tagBlock('mineable:pickaxe')
    sog.create('pumping_projector_module')
        .displayName('Space Pump Projector Module')
        .textureAll('kubejs:block/projector/pumping_projector_module')
        .soundType('metal')
        .resistance(1)
        .lightLevel(0)
        .tagBlock('mineable:pickaxe')
    sog.create('cosmic_projector_module')
        .displayName('Cosmic Projector Module')
        .textureAll('kubejs:block/projector/cosmic_projector_module')
        .soundType('metal')
        .resistance(1)
        .lightLevel(0)
        .tagBlock('mineable:pickaxe')
    sog.create('fusion_projector_module')
        .displayName('Fusion Projector Module')
        .textureAll('kubejs:block/projector/fusion_projector_module')
        .soundType('metal')
        .resistance(1)
        .lightLevel(0)
        .tagBlock('mineable:pickaxe')


        // C O I L S
    sog.create('atomic_alloy_coil_block', 'gtceu:coil')
        .temperature(12500)
        .level(9)
        .energyDiscount(16) // 
        .tier(9)
        .textureAll('kubejs:block/atomic/coil')
        .hardness(5)
        .requiresTool(true)
        .soundType('metal')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('minecraft:mineable/pickaxe')
    sog.create('resonant_essence_coil_block', 'gtceu:coil')
        .temperature(13500)
        .level(15)
        .energyDiscount(250) // 
        .tier(9.5)
        .textureAll('kubejs:block/coils/machine_coil_resonant_essence')
        .hardness(5)
        .requiresTool(true)
        .soundType('metal')
        .tagBlock('minecraft:needs_iron_tool')
        .tagBlock('minecraft:mineable/pickaxe')
    sog.create('awakened_draconium_coil_block', 'gtceu:coil')
        .temperature(15500)
        .level(16)
        .energyDiscount(300) // 
        .tier(10)
        .coilMaterial(() => GTMaterials.get('awakened_draconium'))
        .textureAll('kubejs:block/coils/machine_coil_awakened_draconium')
        .hardness(5)
        .requiresTool(true)
        .soundType('metal')
        .tagBlock('forge:mineable/wrench')
})