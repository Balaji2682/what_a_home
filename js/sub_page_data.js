$(document).ready(function(){
    const service = window.top.location.href.split('?')[1];
    // history.pushState('', '',service);
    function generate(img,Head,Desc,work) {
        let bg = $('#first-block')[0];
        let list = $('#works ul');
        let newWork = list[0];
        let oldWork = list[1];
        let oldVal = '';
        let newVal = '';
        let images = {
            0: img + '1',
            1: img + '2',
            2: img + '3',
            3: img + '4',
            4: img + '5',
            5: img + '6',
        };

        // Replace Background Image
        $(bg).addClass(service);

        // Replace a tag value for big images
        $.each(images, function (key, value) {
            let dash = $('#gallery a')[key];
            $(dash).attr('href', '../services/img/' + service + '/' + value + '.jpg');
        });

        // Replace a tag value for small images
        $.each(images, function (key, value) {
            let pre = $('#gallery img')[key];
            $(pre).attr('src', '../services/img/' + service + '/' + value + '.jpg');
        });

        // Replace Main Head and Quotes
        $('#first-block h1').html(Head);
        $('#first-block h4').html(Desc);

        // New Wok List generation
        $.each(work.new, function (key, value) {
            let val = '<li class="list-group-item">' + value + '</li>';
            newVal = newVal + val
        });

        // Old Work List generation
        $.each(work.old, function (key, value) {
            let val = '<li class="list-group-item">' + value + '</li>';
            oldVal = oldVal + val
        });

        // Replace New & Old Works
        $(newWork).html(newVal);
        $(oldWork).html(oldVal);
    }

    switch (service){
        case 'Architecture':
        {
            const image = 'arch';
            const Head = 'Architecture';
            const Desc = 'Where Dreams Comes True';
            const work = {
                new: ['FEASIBILITY ANALYSIS','MASTER PLANNING','SCHEMATIC DESIGN','DESIGN DEVELOPMENT'],
                old: ['RENOVATION','PERMITTING PROCESS','CONSTRUCTION ADMINISTRATION','CONSTRUCTION DOCUMENTATION']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'Gardening':
        {
            const image = 'gard';
            const Head = 'Gardening';
            const Desc = 'Where Pleasant Arrives';
            const work = {
                new: ['Landscape Designing','Lawn Service','Garden Decoration','Organic Gardening'],
                old: ['Maintenance','Gardening Solutions','CARE TAKERS','Cleaning']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'Electrical':
        {
            const image = 'Elec';
            const Head = 'Electrical';
            const Desc = 'Where Pleasant Arrives';
            const work = {
                new: ['Wiring Work','Electrical Equipment','Electric Point','Other Services...'],
                old: ['Electronic Repair','Re-Wiring','Electrical Reinstallation','Other Services...']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'FalseCeling':
        {
            const image = 'fals';
            const Head = 'False Ceiling';
            const Desc = 'Where Pleasant Arrives';
            const work = {
                new: ['Gypsum Plasterboard','Grid Ceiling','Ecophon Ceiling','Creative Celing'],
                old: ['Plaster Board','Ceiling Tiles','Ceiling Rework','Other Services']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'ModularKitchen':
        {
            const image = 'mod';
            const Head = 'Modular Kitchen';
            const Desc = 'Personalise your cooking space';
            const work = {
                new: ['Hazel Straight','U-Shaped',' L-Shaped','Parallel'],
                old: ['Re-Works','Add-on','Repair Works','Customer Requirement']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'WoodWorks':
        {
            const image = 'wood';
            const Head = 'Wood Works';
            const Desc = 'Live In Traditional Environment';
            const work = {
                new: ['Wooden Doors','Dining Table','Cupboards','Windows'],
                old: ['Re-Works','Varnishing','Repair Works','Re modeling']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'Flooring':
        {
            const image = 'floor';
            const Head = 'Flooring';
            const Desc = 'Feels Like Heaven';
            const work = {
                new: ['Wooden Flooring','Granite','3D Flooring','Tiles'],
                old: ['Joint Cracks','Water Proofing','Floor Solution','Re-Works']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'Windows':
        {
            const image = 'window';
            const Head = 'Window';
            const Desc = 'Makes You Feel Fresh';
            const work = {
                new: ['Wooden Windows','Vinyl','Aluminium','Fiber Glass'],
                old: ['Mosquito Net','Panel Replacement','Glass Replacement','Re- Works']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'LED':
        {
            const image = 'led';
            const Head = 'LED';
            const Desc = 'Gives Colors To Your Home';
            const work = {
                new: ['Customized Light','Stair Case LED','Indoor Works','Outdoor Works'],
                old: ['Installation','Repair Works','Re-works','Other Services']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'Automation':
        {
            const image = 'autom';
            const Head = 'Automation';
            const Desc = 'Makes Your Work Easier';
            const work = {
                new: ['Outdoor Semi-Automation','Indoor Semi-Automation','Smart Automation','Full Automation'],
                old: ['Repair Works','Re-Works','Parts Replacement','Security Check']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'Glass':
        {
            const image = 'glass';
            const Head = 'Glass Work';
            const Desc = 'Where Brightness Arrives';
            const work = {
                new: ['Glass Door','Glass Panel','Glass Art','Glass Windows'],
                old: ['Art Work','Repair Works','Re-Works','Parts Replacement']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'Plumbing':
        {
            const image = 'plum';
            const Head = 'Plumbing';
            const Desc = 'We Connects And Fix Leakage';
            const work = {
                new: ['Water Heater','Washroom','Indoor Plumbing','OutDoor Plumbing'],
                old: ['Leakage Fix','Parts Replacement','Disposal System Fix','Re-work']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'WallPainting':
        {
            const image = 'wallp';
            const Head = 'Wall Painting';
            const Desc = 'Brings Colorful To Your Home';
            const work = {
                new: ['Spray Painting','Water Proofing','Regular Painting','Play School'],
                old: ['Patch Works','Color Fade Fix','Re-Painting','Wall Analysis']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'WallArt':
        {
            const image = 'walla';
            const Head = 'Wall Art';
            const Desc = 'Where Walls Speaks';
            const work = {
                new: ['3D Art','Modern Art','Customized Art ','Photo Art'],
                old: ['Art Removal','Sticker Removal','Re- Works','Parts Replacement']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'MetalWorks':
        {
            const image = 'metal';
            const Head = 'Metal Works';
            const Desc = 'To Make Your Much Stronger';
            const work = {
                new: ['Metal Gate','Metal Door','Weilding','Metal Window'],
                old: ['Re- Work','Patch Work','Cost Estimation','Parts Replacements']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'Curtains':
        {
            const image = 'curtain';
            const Head = 'Curtains';
            const Desc = 'Dress Up Your Window';
            const work = {
                new: ['Box Pleat','Rod Pocket','Tailored Pleat','Goblet'],
                old: ['Curtain Replacement','Re-Works','Re-Designing','Other Services']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'CCTV':
        {
            const image = 'cctv';
            const Head = 'CCTV';
            const Desc = 'Safety For Your Family';
            const work = {
                new: ['Dome CCTV','Bullet CCTV','Network Enabled CCTV','Infrared CCTV'],
                old: ['Sensor Replacement','Video Analytics','Storage Recovery','Other Services']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'SolarPower':
        {
            const image = 'solar';
            const Head = 'Solar Power';
            const Desc = 'Harness The Power Of Sun';
            const work = {
                new: ['Solar Electric System','Solar Hot Water','Solar Inverter','Solar Electric Storage'],
                old: ['Cell Replacement','Glass Replacement','Electric Work','Re-Installation']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'Roofing':
        {
            const image = 'roof';
            const Head = 'Roofing';
            const Desc = 'A Perfect Weather Sheild For A Perfect Home';
            const work = {
                new: ['Asbestos Sheet','Green Roofing','Stone Coated','Metal Roofing'],
                old: ['Renovation','Repair Works','Replacements','Other Services']
            };
            generate(image,Head,Desc,work);
        }
            break;

        case 'WaterFilter':
        {
            const image = 'water';
            const Head = 'Water Filter';
            const Desc = 'Purity In Every Drops';
            const work = {
                new: ['FEASIBILITY ANALYSIS','MASTER PLANNING','SCHEMATIC DESIGN','DESIGN DEVELOPMENT'],
                old: ['RENOVATION','PERMITTING PROCESS','CONSTRUCTION ADMINISTRATION','CONSTRUCTION DOCUMENTATION']
            };
            generate(image,Head,Desc,work);
        }
            break;
        default:
            $('body').html('');
    }
});
