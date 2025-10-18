/*
author: Boostraptheme
author URL: https://boostraptheme.com
License: Creative Commons Attribution 4.0 Unported
License URL: https://creativecommons.org/licenses/by/4.0/
*/

(function($) {

    "use strict"; // Start of use strict
    
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 60)
            }, 1000, "easeInOutExpo");
            return false;
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 82
    });

    //fixed navbar
    var toggleAffix = function(affixElement, scrollElement, wrapper) {

        var height = affixElement.outerHeight(),
            top = wrapper.offset().top;

        if (scrollElement.scrollTop() >= top) {
            wrapper.height(height);
            affixElement.addClass("affix");
        } else {
            affixElement.removeClass("affix");
            wrapper.height('auto');
        }

    };

    $('[data-toggle="affix"]').each(function() {
        var ele = $(this),
            wrapper = $('<div></div>');

        ele.before(wrapper);
        $(window).on('scroll resize', function() {
            toggleAffix(ele, $(this), wrapper);
        });

        // init
        toggleAffix(ele, $(window), wrapper);
    });


})(jQuery);

/*====================================================
                    TESTIMONIALS
====================================================*/
$(function() {
    $("#testimonial-slider").owlCarousel({
        items: 2,
        smartSpeed: 700,
        autoplay: true,
        loop: true,
        pagination: true,
        slideSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });
});

/*====================================================
                    PORTFOLIO GALLERY
====================================================*/
$(function() {
    $("#portfolio-gallery").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        smartSpeed: 800,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
});

/*====================================================
                        PORTFOLIO
====================================================*/
  $(function() {

      $("#portfolio").magnificPopup({
          delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image',
          gallery: {
              enabled: true
          }

      });
  });

/* ====================================================
                       BACK TO TOP
=======================================================*/
  (function($) {

      $(window).scroll(function() {

          if ($(this).scrollTop() < 50) {
              // hide nav
              $("nav").removeClass("ss-top-nav");
              $("#back-to-top").fadeOut();

          } else {
              // show nav
              $("nav").addClass("ss-top-nav");
              $("#back-to-top").fadeIn();
          }
      });
  })(jQuery); // End of use strict


document.addEventListener('DOMContentLoaded', function () {
    var supportedLanguages = ['el', 'en'];
    var fallbackLanguage = 'el';
    var i18nEntries = [
        {
            selector: '.topmenu .phone div',
            values: {
                en: '<i class="fa fa-phone"></i> Call Now: 2107018102',
                el: '<i class="fa fa-phone"></i> Καλέστε τώρα: 2107018102'
            }
        },
        {
            selector: '.topmenu .address div',
            values: {
                en: '<i class="fa fa-map-marker"></i> Pl. Amvrosiou Plita 18, Athina 116 31',
                el: '<i class="fa fa-map-marker"></i> Πλ. Αμβροσίου Πλίτα 18, Αθήνα 116 31'
            }
        },
        {
            selector: 'a[href="#home"]',
            values: {
                en: 'Home',
                el: 'Αρχική'
            }
        },
        {
            selector: 'a[href="#services"]',
            values: {
                en: 'Services',
                el: 'Υπηρεσίες'
            }
        },
        {
            selector: 'a[href="#about"]',
            values: {
                en: 'About',
                el: 'Σχετικά'
            }
        },
        {
            selector: 'a[href="#team"]',
            values: {
                en: 'Products',
                el: 'Προϊόντα'
            }
        },
        {
            selector: 'a[href="#portfolio"]',
            values: {
                en: 'Customer style',
                el: 'Στυλ πελατών'
            }
        },
        {
            selector: 'a[href="#testimonials"]',
            values: {
                en: 'Testimonials',
                el: 'Μαρτυρίες'
            }
        },
        {
            selector: 'a[href="#contact"]',
            values: {
                en: 'Contact',
                el: 'Επικοινωνία'
            }
        },
        {
            selector: '#carouselExampleIndicators .carousel-item .home-heading h3',
            isList: true,
            values: {
                en: [
                    'Where Confidence Begins<br>Experience the Art of Precision and Modern Style at HairU',
                    'Your Signature Style, Perfected —<br>Where Every Cut, Color, and Detail Reflects You.'
                ],
                el: [
                    'Εκεί που ξεκινά η αυτοπεποίθηση<br>Ζήστε την τέχνη της ακρίβειας και του σύγχρονου στυλ στο HairU',
                    'Το δικό σου υπογεγραμμένο στυλ, στην τελειότητα &mdash;<br>Κάθε κούρεμα, χρώμα και λεπτομέρεια σε εκφράζει.'
                ]
            }
        },
        {
            selector: '#carouselExampleIndicators .home-btn button',
            isList: true,
            values: {
                en: ['Book Now', 'Book Now'],
                el: ['Κλείστε ραντεβού', 'Κλείστε ραντεβού']
            }
        },
        {
            selector: '#services .heading h1',
            values: {
                en: 'Services',
                el: 'Υπηρεσίες'
            }
        },
        {
            selector: '#services .service-desc',
            isList: true,
            values: {
                en: ['For Her', 'For Him'],
                el: ['Για Εκείνη', 'Για Εκείνον']
            }
        },
        {
            selector: '#services-for-her .heading h1',
            values: {
                en: 'Services For Her',
                el: 'Υπηρεσίες για Εκείνη'
            }
        },
        {
            selector: '#services-for-her .service-desc',
            isList: true,
            values: {
                en: ['Classic Style', 'Colour', 'Hair &amp; Scalp Therapy', 'Keratine &amp; Botox Treatments'],
                el: ['Κλασικό Στυλ', 'Χρώμα', 'Θεραπείες Μαλλιών &amp; Τριχωτού', 'Θεραπείες Κερατίνης &amp; Botox']
            }
        },
        {
            selector: '#services-for-her .service-note',
            isList: true,
            values: {
                en: [
                    'Professional Lady Haircut, Blow Dry, Styling',
                    'Color Toner, Highlights, Babylights, Balayage, Ombre, Color Remover',
                    'Malibu C Head Lab, Malibu C Make Over, Vitamin C Therapy, Other Treatments',
                    'Treatments to infuse a high amount of protein into the hair, evening out porosity for long-lasting smoothness.'
                ],
                el: [
                    'Επαγγελματικό γυναικείο κούρεμα, στέγνωμα, styling',
                    'Ρεφλέ, ανταύγειες, babylights, balayage, ombre, αφαίρεση χρώματος',
                    'Malibu C Head Lab, Malibu C Make Over, θεραπεία βιταμίνης C, άλλες θεραπείες',
                    'Θεραπείες που ενισχύουν τα μαλλιά με πρωτεΐνη, εξισορροπούν την πορώτητα και προσφέρουν απαλότητα με διάρκεια.'
                ]
            }
        },
        {
            selector: '#services-for-him .heading h1',
            values: {
                en: 'Services For Him',
                el: 'Υπηρεσίες για Εκείνον'
            }
        },
        {
            selector: '#services-for-him .service-desc',
            isList: true,
            values: {
                en: ['Classic Cut', 'Beard Trimming', 'Scalp Treatments'],
                el: ['Κλασικό Κούρεμα', 'Περιποίηση Γενειάδας', 'Θεραπείες Τριχωτού']
            }
        },
        {
            selector: '#services-for-him .service-note',
            isList: true,
            values: {
                en: [
                    'We’re dedicated to giving every man a sharp, confident look that enhances his style and elevates his appearance.',
                    'Our beard trimming service is designed to deliver precise, clean lines and a perfectly groomed look that complements your style.',
                    'We provide deep scalp scrub that clears buildup, unclogs hair follicles, and removes dead skin and dandruff.'
                ],
                    el: [
                    'Αφοσιωνόμαστε στο να προσφέρουμε σε κάθε άνδρα μια κομψή, σίγουρη εμφάνιση που αναδεικνύει το στυλ του.',
                    'Η υπηρεσία περιποίησης γενειάδας χαρίζει καθαρές γραμμές και άψογη εμφάνιση που συμπληρώνει το στυλ σου.',
                    'Προσφέρουμε βαθύ καθαρισμό τριχωτού που απομακρύνει συσσώρευση, ανοίγει τους θύλακες και αποβάλλει νεκρά κύτταρα και πιτυρίδα.'
                ]
            }
        },
        {
            selector: '#about .heading h1',
            values: {
                en: 'About Us',
                el: 'Ποιοι Είμαστε'
            }
        },
        {
            selector: '#about .body-cont h3',
            values: {
                en: 'Good Hair style Good Selfie',
                el: 'Όμορφα μαλλιά, όμορφες φωτογραφίες'
            }
        },
        {
            selector: '#about .body-cont p',
            values: {
                en: 'At our salon, your experience is at the heart of everything we do. We’re dedicated to creating a welcoming space where every visit leaves you feeling confident and cared for. Our team uses only best-in-class, professional-grade products — continuously updating our selection to include the latest innovations in hair care and styling. From start to finish, we focus on precision, comfort, and results that exceed your expectations.',
                el: 'Στο κομμωτήριό μας, η εμπειρία σας βρίσκεται στο επίκεντρο κάθε υπηρεσίας. Δημιουργούμε έναν φιλόξενο χώρο όπου κάθε επίσκεψη σας αφήνει με αυτοπεποίθηση και αίσθημα φροντίδας. Η ομάδα μας χρησιμοποιεί μόνο κορυφαία, επαγγελματικής ποιότητας προϊόντα και ανανεώνει διαρκώς την γκάμα με τις πιο πρόσφατες καινοτομίες στην περιποίηση και το styling των μαλλιών. Από την αρχή μέχρι το τέλος, δίνουμε έμφαση στην ακρίβεια, την άνεση και το αποτέλεσμα που ξεπερνά τις προσδοκίες σας.'
            }
        },
        {
            selector: '#about .body-cont button',
            values: {
                en: 'ENQUIRIES',
                el: 'ΕΠΙΚΟΙΝΩΝΙΑ'
            }
        },
        {
            selector: '#team .heading h1',
            values: {
                en: 'Our Trusted Brands',
                el: 'Τα αξιόπιστα brands μας'
            }
        },
        {
            selector: '#portfolio .heading h1',
            values: {
                en: 'Our Customer Style',
                el: 'Στυλ Πελατών'
            }
        },
        {
            selector: '#testimonials .heading h1',
            values: {
                en: 'Testimonials',
                el: 'Μαρτυρίες'
            }
        },
        {
            selector: '#testimonials .testimonial .description',
            isList: true,
            values: {
                en: [
                    'Exceptional service from Mike &amp; the team at hairU! He will never settle for anything less than perfect - and will make sure that I leave feeling happy and my hair is exactly the way I’ve asked for.<br>He is a wonderful colourist and stylist - I will continue coming back to Hair U for any treatment or style.',
                    'Excellent professional, attention to detail, exactly what I asked for and very kind. Thank you very much! 5 stars and I recommend.',
                    'There is not a time when I have not left with the result I have requested. Congratulations to the team, you are the best by far.'
                ],
                el: [
                    'Εξαιρετική εξυπηρέτηση από τον Mike και την ομάδα του HairU! Δεν συμβιβάζεται ποτέ με τίποτα λιγότερο από το τέλειο και πάντα φροντίζει να φεύγω χαρούμενη με τα μαλλιά ακριβώς όπως τα ζήτησα. Είναι υπέροχος colorist και stylist· θα συνεχίσω να επιστρέφω στο HairU για κάθε περιποίηση ή look.',
                    'Εξαιρετικός επαγγελματίας, με προσοχή στη λεπτομέρεια, ακριβώς αυτό που ζήτησα και πολύ ευγενικός. Ευχαριστώ πολύ! 5 αστέρια και τον προτείνω ανεπιφύλακτα.',
                    'Δεν υπάρχει φορά που να μην έφυγα με το αποτέλεσμα που ζήτησα. Συγχαρητήρια στην ομάδα, είστε μακράν οι καλύτεροι.'
                ]
            }
        },
        {
            selector: '#contact .heading h1',
            values: {
                en: 'Contact Us',
                el: 'Επικοινωνήστε μαζί μας'
            }
        },
        {
            selector: '#contact .heading .desc',
            values: {
                en: 'We would love to hear from you!',
                el: 'Θα χαρούμε να σας ακούσουμε!'
            }
        },
        {
            selector: '#contact .contact-item span',
            isList: true,
            values: {
                en: ['Telephone:', 'Address:'],
                el: ['Τηλέφωνο:', 'Διεύθυνση:']
            }
        },
        {
            selector: '.quicklinks a',
            isList: true,
            values: {
                en: ['Privacy Policy', 'Terms of Use'],
                el: ['Πολιτική απορρήτου', 'Όροι χρήσης']
            }
        }
    ];

    function applyLanguage(lang) {
        i18nEntries.forEach(function (entry) {
            var nodes = document.querySelectorAll(entry.selector);
            if (!nodes.length) {
                return;
            }
            var translations = entry.values[lang];
            if (translations === undefined) {
                return;
            }
            if (entry.isList) {
                nodes.forEach(function (node, index) {
                    var value;
                    if (Array.isArray(translations)) {
                        value = translations[index];
                    } else {
                        value = translations;
                    }
                    if (value !== undefined) {
                        node.innerHTML = value;
                    }
                });
            } else {
                var content = Array.isArray(translations) ? translations[0] : translations;
                if (content === undefined) {
                    return;
                }
                nodes.forEach(function (node) {
                    node.innerHTML = content;
                });
            }
        });
        document.documentElement.setAttribute('lang', lang === 'el' ? 'el-GR' : 'en');
    }

    function markActiveButton(lang) {
        document.querySelectorAll('.lang-switch').forEach(function (button) {
            button.classList.toggle('is-active', button.dataset.lang === lang);
        });
    }

    function changeLanguage(lang) {
        if (supportedLanguages.indexOf(lang) === -1) {
            return;
        }
        applyLanguage(lang);
        markActiveButton(lang);
        localStorage.setItem('hairu-language', lang);
    }

    document.querySelectorAll('.lang-switch').forEach(function (button) {
        button.addEventListener('click', function () {
            changeLanguage(button.dataset.lang);
        });
    });

    var storedLanguage = localStorage.getItem('hairu-language');
    var startingLanguage = supportedLanguages.indexOf(storedLanguage) !== -1 ? storedLanguage : fallbackLanguage;

    changeLanguage(startingLanguage);
});
